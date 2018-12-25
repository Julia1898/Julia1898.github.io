'use strict';

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var buttonShowDetails = document.querySelectorAll('.rd-details__textBlock--buttonHidden');

for (var i = 0; i < buttonShowDetails.length; i++) {
  buttonShowDetails[i].onclick = function () {
    var parent = this.closest('.rd-details__textBlock');
    var hiddenBlock = parent.querySelector('.rd-details__textBlock--hiddenBlock');

    this.classList.toggle('rd-details__textBlock--buttonShown');
    hiddenBlock.classList.toggle('rd-details__textBlock--showBlock');
  };
}

function RenderCustomise(render, input) {

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
    } else if (target.value < minValue) {
      target.value = makeSpace(minValue);
      render.value = minValue;
      fillLine(render);
      console.log(render.value);
    } else {
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

  function fillLine(target) {
    var maxValue = target.getAttribute('max');
    var currentValueRender = target.value;
    var val = 100 / (maxValue / currentValueRender);
    target.style.background = '-webkit-linear-gradient(left ,#3ABCDC 0%,#3ABCDC ' + val + '%,#c9c9ca ' + val + '%, #c9c9ca  100%)';
  }

  function makeSpace(val) {
    val = val.toString();
    return val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
}

var amountInput = document.querySelector('#rd-amountInput');
var daysInput = document.querySelector('#rd-daysInput');
var amountRender = document.querySelector('#rd-amountRender');
var daysRender = document.querySelector('#rd-daysRender');

var amount = new RenderCustomise(amountRender, amountInput);
var days = new RenderCustomise(daysRender, daysInput);

/////////////////////

var selectionWrapper = document.querySelector('#rd-selectionWrapper');
var submit = document.querySelector('.rd-tableRenderBlock__render--submit');
var newDataNodes = selectionWrapper.cloneNode(true);
newDataNodes = newDataNodes.children;

submit.addEventListener('click', function () {
  showItems(newDataNodes, selectionWrapper);
});

function showItems(nodes, parent) {
  var amoutInputValue = +amountInput.value.split(' ').join('');
  var daysInputValue = +daysInput.value;
  var node = Array.from(nodes);

  sortAmountValue();
  sortDaysValue();
  sortPriority();
  getNodeList(node);

  function sortAmountValue() {
    node = node.filter(function (x) {
      var value = x.querySelector('.rd-description__counter--amount span');
      value = value.innerHTML;
      value = value.split('-');

      var _value = value,
          _value2 = _slicedToArray(_value, 2),
          minVal = _value2[0],
          maxVal = _value2[1];

      minVal = minVal.split(' ').join('');
      maxVal = maxVal.split(' ').join('');

      if (amoutInputValue >= minVal && amoutInputValue <= maxVal) {
        return true;
      }
    });
  }

  function sortDaysValue() {
    node = node.filter(function (x) {
      var value = x.querySelector('.rd-description__counter--term');
      value = value.innerHTML;
      value = value.match(/\d+/)[0];
      if (daysInputValue <= value) {
        return true;
      }
    });
  };

  function sortPriority() {
    node.sort(function (x, y) {
      var priorityX = x.getAttribute('data-priority');
      var priorityY = y.getAttribute('data-priority');

      if (priorityX > priorityY) {
        return 1;
      } else {
        return -1;
      }
    });
  };

  function getNodeList(elements) {
    var HTMLString = '';

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        HTMLString += element.outerHTML;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (HTMLString.length == 0) {
      parent.innerHTML = "<p class=\"rd-messageNotFount\">\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E,</br> \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0430</p>";
    } else {
      parent.innerHTML = HTMLString;
    }
  };
}