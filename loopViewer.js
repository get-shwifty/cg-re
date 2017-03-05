(function() {

    var size = 20;
    var playersColors = ['#ff0000', '#33ffff', '#ff99cc', '#ffcc33', '#ffff00'];
    var labColors = {
        "_": "#333",
        "#": "#1818ff",
        "0": "#000"
    };
    var cases = [];

    function createLab(ctn, obj){
        ctn.textContent = "";
        cases = [];
        var $ctn = $(ctn);
        $ctn.height(obj.h * size).width(obj.w * size);

        for(let i = 0; i < obj.h; i++) {
            cases[i] = [];
            for(let j = 0; j < obj.w; j++) {
                var $el = $("<a class='empty'/>");
                $el.css({left:j*size,top:i*size});
                $ctn.append($el);
                cases[i].push($el);
            }
        }
    }

    function drawLab(lab) {
        for(let y = 0; y < cases.length; y++) {
            for(let x = 0; x < cases[y].length; x++) {
                $(cases[y][x]).css({'background': labColors._});
            }
        }
        for(let y = 0; y < lab.length; y++) {
            for(let x = 0; x < lab[y].length; x++) {
                $(cases[y][x]).css({'background': labColors[lab[y][x]]});
            }
        }
    }

    function drawObj(obj){
        obj.pos.forEach((c,i) => {
            $(cases[c[0]][c[1]]).css({'background': playersColors[i]});
        });
    }

    function create(self) {
        createLab(self.$el, self.obj);
        draw(self);
    }

    function draw(self) {
        drawLab(self.lab);
        drawObj(self.obj);
    }

    Vue.component("draw-loop", {
        template: "<div class='container'></div>",
        props: ["obj", "lastChange", "inputLab"],
        computed: {
            lab() {
                return this.inputLab.split("\n").map(_.trim).map(l => l.split(""));
            }
        },
        watch: {
            lastChange() {
                create(this);
            },
            obj() {
                draw(this);
            },
            inputLab() {
                draw(this);
            }
        },
        mounted() {
            create(this);
        }
    });

}());
