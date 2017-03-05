(function() {

    var size = 20;
    var colors = ['red', 'blue', 'green', 'black', 'orange'];
    var cases = [];

    function create(ctn, obj){
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
        draw(obj);
    }

    function clear(obj){
        obj.pos.forEach((c,i) => {
            $(cases[c[0]-1][c[1]-1]).css({'background':'white'});
        });
    }

    function draw(obj){
        obj.pos.forEach((c,i) => {
            $(cases[c[0]-1][c[1]-1]).css({'background':colors[i]});
        });
    }

    Vue.component("draw-loop", {
        template: "<div class='container'></div>",
        props: ["obj", "lastChange"],
        watch: {
            obj(newObj, oldObj) {
                clear(oldObj);
                draw(newObj);
            },
            lastChange() {
                create(this.$el, this.obj);
            }
        },
        mounted() {
            create(this.$el, this.obj);
        }
    });

}());
