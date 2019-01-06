var rdFunctionality = (function() {

    function RenderCustomise(render, input) {

        render.onchange = function (event) {
            var target = event.target;
            var currentValueRender = target.value;
            currentValueRender = makeSpace(currentValueRender);
            input.value = currentValueRender;

            fillLine(target);
        };


        render.oninput = function (event) {
            var target = event.target;
            var currentValueRender = target.value;
            currentValueRender = makeSpace(currentValueRender);
            input.value = currentValueRender;

            fillLine(target);
        };


        input.onfocus = function (event) {
            var target = event.target;
            var newVal = target.value.split(' ').join('');
            target.value = newVal;
        };


        input.onblur = function (event) {
            var target = event.target;
            var maxValue = +render.getAttribute('max');
            var minValue = +render.getAttribute('min');

            if (target.value > maxValue) {
               target.value = makeSpace(maxValue);
            }
            else if (target.value < minValue) {
                target.value = makeSpace(minValue);
                render.value = minValue;
                fillLine(render);
            } 
            else {
                target.value = makeSpace(target.value);
            }
        };


        input.onkeydown = function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 65 && event.ctrlKey === true || event.keyCode >= 35 && event.keyCode <= 39) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        };


        input.oninput = function (event) {
            var target = event.target;
            var newVal = target.value;
            render.value = newVal;

            fillLine(render);
        };


        function makeSpace(val) {
            val = val.toString();
            return val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        }
    }



    function fillLine(target) {
        var maxValue = target.getAttribute('max');
        var currentValueRender = target.value;
        var val = 100 / (maxValue / currentValueRender);
        target.style.background = '-webkit-linear-gradient(left ,#3ABCDC 0%,#3ABCDC ' + val + '%,#c9c9ca ' + val + '%, #c9c9ca  100%)';
        target.style.background = '-moz-linear-gradient(left ,#3ABCDC 0%,#3ABCDC ' + val + '%,#c9c9ca ' + val + '%, #c9c9ca  100%)';
        target.style.background = '-o-linear-gradient(left ,#3ABCDC 0%,#3ABCDC ' + val + '%,#c9c9ca ' + val + '%, #c9c9ca  100%)';
        target.style.background = '-ms-linear-gradient(left ,#3ABCDC 0%,#3ABCDC ' + val + '%,#c9c9ca ' + val + '%, #c9c9ca  100%)';
    }


    return {
        RenderCustomise: RenderCustomise,
        fillLine: fillLine
    };

})();

export {rdFunctionality};
