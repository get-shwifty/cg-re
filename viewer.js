
function decode(self, input) {
    var file = input.split("\n");
    if(file.length < 4) return;

    file.shift();
    var [W, H, N] = file.shift().split(" ").map(_.toNumber);
    var score = parseInt(_.last(file.pop().split(" ")));
    file.pop();

    var loops = [];
    while(file.length > 0) {
        var s = file.shift();
        var pos = [];
        for(let j = 0; j < N; j++) {
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

    self.W = W;
    self.H = H;
    self.N = N;
    self.loops = loops;
    self.score = score;
}

viewer = new Vue({
    el: '#viewer',
    data: {
        input: "",
        W: 0,
        H: 0,
        N: 0,
        loops: [],
        score: 0
    },
    watch: {
        input() {
            decode(this, this.input);
        }
    }
});