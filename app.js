(function() {

    function decode(self, input) {
        var file = input.split("\n");
        if(file.length < 4) return;

        file.shift();
        var [w, h, n] = file.shift().split(" ").map(_.toNumber);
        var score = parseInt(_.last(file.pop().split(" ")));
        file.pop();

        var loops = [];
        while(file.length > 0) {
            var s = file.shift().split(" ");
            var pos = [];
            for(let j = 0; j < n; j++) {
                pos.push(file.shift().split(" ").map(_.toNumber));
            }
            file.shift();
            var output = file.shift();
            file.shift();
            file.shift();
            file.shift();
            loops.push({
                s,
                pos,
                output
            });
        }

        self.w = w;
        self.h = h;
        self.n = n;
        self.loops = loops;
        self.score = score;

        computeLab(self);
    }

    function convert(c) {
        return c === "#" ? "#" : "0"
    }

    function computeLab(self) {
        let lab;

        if(self.inputLab.length === 0) {
            lab = [];
            for(let y = 0; y < self.h; y++) {
                lab[y] = [];
                for (let x = 0; x < self.w; x++) {
                     lab[y][x] = "_";
                }
            }
        } else {
            lab = self.lab;
        }

        for(let loop of self.loops) {
            for(let i = 0; i < loop.pos.length; i++) {
                let el = loop.pos[i];
                lab[el[0]][el[1]] = "0";
            }
            let p = loop.pos[4];
            lab[p[0]][p[1] - 1] = convert(loop.s[0]);
            lab[p[0] + 1][p[1]] = convert(loop.s[1]);
            lab[p[0]][p[1] + 1] = convert(loop.s[2]);
            lab[p[0] - 1][p[1]] = convert(loop.s[3]);
        }

        self.inputLab = lab.map(line => line.join("")).join("\n");
    }

    new Vue({
        el: '#app',
        data: {
            input: "",
            inputLab: "",
            w: 0,
            h: 0,
            n: 0,
            loops: [],
            score: 0,
            currentLoop: 0,
            lastChange: 0
        },
        computed: {
            previousChoice() {
                return this.currentLoop > 0 ? this.loops[this.currentLoop - 1].output : "?";
            },
            loop() {
                return this.loops[this.currentLoop];
            },
            lab() {
                return this.inputLab.split("\n").map(_.trim).map(l => l.split(""));
            }
        },
        methods: {
            getObj(loop) {
                return {
                    w: this.w,
                    h: this.h,
                    n: this.n,
                    pos: loop.pos
                };
            }
        },
        watch: {
            input() {
                this.currentLoop = 0;
                this.lastChange = Date.now();
                decode(this, this.input);
            }
        }
    });

}());