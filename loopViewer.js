(function() {

    function draw(ctn, obj){
        var $ctn = $(ctn);
        var size = 20;
        var cases = [];
        var colors = ['red', 'blue', 'green', 'black', 'orange'];
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
        obj.pos.forEach((c,i) => {
            $(cases[c[0]-1][c[1]-1]).css({'background':colors[i]});
        });

    }

    Vue.component("draw-loop", {
        template: "<div class='container'></div>",
        props: ["obj"],
        mounted() {
            draw(this.$el, this.obj);
        }
    });

}());
