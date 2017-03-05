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
    }

    new Vue({
        el: '#app',
        data: {
            input: "",
            lab: "",
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