var rdShowItems = (function() {

    var buttonShowDetails = document.querySelectorAll('.rd-details__textBlock--buttonHidden');
    var amountInput = document.querySelector('#rd-amountInput');
    var daysInput = document.querySelector('#rd-daysInput');
    var amountRender = document.querySelector('#rd-amountRender');
    var daysRender = document.querySelector('#rd-daysRender');
    var selectionWrapper = document.querySelector('#rd-selectionWrapper');
    var newDataNodes = selectionWrapper.querySelectorAll('.rd-selectedItem');
    var submit = document.querySelector('.rd-tableRenderBlock__render--submit');
    var renderLine = document.querySelectorAll('.rd-renderLine');
    var renderLineCircle = document.querySelectorAll('.rd-renderLine--circle');

    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){       
            loop(renderLine);
            loop(renderLineCircle);
    }


    function loop(elem){
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.height = 9 + 'px';
        }
    }


    for (var i = 0; i < buttonShowDetails.length; i++) {
        buttonShowDetails[i].onclick = function () {
          showHideDetails(this);
        };
    }


    function showHideDetails(elem) {
        var parent = elem.parentNode.parentNode.parentNode;
        var hiddenBlock = parent.querySelector('.rd-details__textBlock--hiddenBlock');

        hide(elem, 'rd-details__textBlock--buttonShown');
        hide(hiddenBlock, 'rd-details__textBlock--showBlock');

        function hide(el, className) {

            if (!el.classList.contains(className)) {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        }        
    }



    function createRender(classObj, fillLine) {
      new classObj(amountRender, amountInput);
      new classObj(daysRender, daysInput);
    
      amountInput.value = '10 000';
      amountRender.value = 10000;
      daysInput.value = '60';
      daysRender.value = 60;
      fillLine(amountRender);
      fillLine(daysRender);
    }




    submit.addEventListener('click', function () { 
        showItems(newDataNodes, selectionWrapper); 
    });


    function showItems(nodes, parent) {
        var amoutInputValue = +amountInput.value.split(' ').join('');
        var daysInputValue = +daysInput.value;
        var node = [].slice.call(nodes);
      
        
        sortValues('#rd-description__counter--amount #rd-secondAmount',amoutInputValue);
        sortValues('#rd-description__counter--amount #rd-firstAmount',amoutInputValue,true);
        sortValues('.rd-description__counter--term span',daysInputValue);
        sortPriority();
        getNodeList(node, parent);




        function sortValues(elem, compare, flag) {
          if (node.length == 0) return;

            node = node.filter(function (x) {
                var value = x.querySelector(elem);
                value = value.innerHTML;
                value = value.split(' ').join('');
               

                if (flag) {
                    if (compare >= value) {
                        return true;
                    } 
                } else {
                    if (compare <= value) {
                        return true;
                    }
                }
            });
        }


        function sortPriority() {
          if(node.length == 0) return;

            node.sort(function (x, y) {
                var priorityX = x.getAttribute('data-priority');
                var priorityY = y.getAttribute('data-priority');

                if (priorityX > priorityY) {
                    return 1;
                } else {
                    return -1;
                }
            });
        }


        function getNodeList(node, parent) {
            var message = '<p class="rd-messageNotFount">\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E,</br> \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0430</p>';
            var HTMLString = '';
            

            for (var element = 0; element < node.length; element++) {
                HTMLString += node[element].outerHTML;
            }
            
            if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){       
                var parentElement = document.createElement('div');

                while (parent.hasChildNodes()) {
                       parent.removeChild(parent.firstChild);
                }

                if (HTMLString.length == 0) {
                    parent.appendChild(message);
                } else {
                    parentElement.innerHTML = HTMLString;
                    parent.appendChild(parentElement);
                } 
            } else {
                if (HTMLString.length === 0) {
                    parent.innerHTML = message;
                } else {
                    parent.innerHTML = HTMLString;
                } 
             }
                  
        }

        var buttonDetails = document.querySelectorAll('.rd-details__textBlock--buttonHidden');

        for (var q = 0; q < buttonDetails.length; q++){
            buttonDetails[q].onclick = function() {
                showHideDetails(this);
            };
        }
   }


  return{
    buttonShowDetails: buttonShowDetails,
    createRender: createRender
  };
})();

export {rdShowItems};