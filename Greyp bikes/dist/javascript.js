'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	var getElements = function () {
		function getElements(selector) {
			_classCallCheck(this, getElements);

			this.elems = document.querySelectorAll(selector);
		}

		_createClass(getElements, [{
			key: 'on',
			value: function on(event, callback) {
				for (var i = 0; i < this.elems.length; i++) {
					this.elems[i].addEventListener(event, callback);
				}
				return this;
			}
		}]);

		return getElements;
	}();

	;

	var getElement = function (_getElements) {
		_inherits(getElement, _getElements);

		function getElement(selector) {
			_classCallCheck(this, getElement);

			var _this = _possibleConstructorReturn(this, (getElement.__proto__ || Object.getPrototypeOf(getElement)).call(this, selector));

			_this.elem = document.querySelector(selector);
			return _this;
		}

		_createClass(getElement, [{
			key: 'getEl',
			value: function getEl() {
				return this.elem;
			}
		}]);

		return getElement;
	}(getElements);

	;

	//Header---------------------------

	var modal_content = new getElement('.modal-content').getEl();

	new getElements('.play-video').on('click', function () {
		new getElement('.modal').getEl().style.display = 'block';
		modal_content.currentTime = 0;
		modal_content.play();
	});

	new getElements('.close').on('click', function () {
		new getElement('.modal').getEl().style.display = 'none';
		modal_content.pause();
	});

	// //Main-------------------------------

	var control = new getElement('.control_icon').getEl();
	var overview_pic = new getElement('.overview_pic').getEl();
	var third_pic = new getElement('.third_pic').getEl();
	var controller = new getElement('.controller').getEl();
	var small_icon = new getElement('.small_icon').getEl();
	var second_pic = new getElement('.second_pic').getEl();

	control.onmousedown = function (e) {
		var w = document.documentElement.clientWidth;
		var wPic = overview_pic.offsetWidth;
		var wSmall = small_icon.offsetWidth / 2 - 1;
		var wIcon = control.offsetWidth / 2;
		var distance = (w - wPic) / 2;
		var max = wPic - control.offsetWidth;

		document.onmousemove = function (e) {
			var setWidth = e.pageX - distance - wIcon;

			if (setWidth >= max) {
				control.style.left = max + 'px';
			} else if (setWidth <= 0) {
				control.style.left = 0 + 'px';
			} else {
				control.style.left = setWidth + 'px';
				controller.style.left = setWidth + 'px';
				small_icon.style.left = setWidth + wIcon - wSmall + 'px';
				third_pic.style.width = setWidth + 'px';
				second_pic.style.width = setWidth + control.offsetWidth + 'px';
			}
		};
	};

	document.onmouseup = function () {
		document.onmousemove = null;
	};

	new getElements('.naked').on('click', function () {
		control.style.left = 0 + 'px';
		controller.style.left = 0 + 'px';
		small_icon.style.left = control.offsetWidth / 2 - (small_icon.offsetWidth / 2 - 1) + 'px';
		third_pic.style.width = 0 + 'px';
		second_pic.style.width = control.offsetWidth + 'px';
	});

	new getElements('.dressed').on('click', function () {
		control.style.left = overview_pic.offsetWidth - control.offsetWidth + 'px';
		controller.style.left = overview_pic.offsetWidth - control.offsetWidth + 'px';
		small_icon.style.left = overview_pic.offsetWidth - control.offsetWidth / 2 - (small_icon.offsetWidth / 2 - 1) + 'px';
		third_pic.style.width = overview_pic.offsetWidth + 'px';
		second_pic.style.width = overview_pic.offsetWidth + 'px';
	});

	function setHeight() {
		var picW = overview_pic.offsetWidth;
		var wIcon = control.offsetWidth;

		overview_pic.style.height = picW / 1.71 + 'px';
		new getElement('.three').getEl().style.height = picW / 1.71 + 'px';
		new getElement('.two').getEl().style.height = picW / 1.71 + 'px';
		new getElement('.one').getEl().style.height = picW / 1.71 + 'px';
		control.style.left = picW / 2 - wIcon / 2 + 'px';
		controller.style.left = picW / 2 - wIcon / 2 + 'px';
		controller.style.marginRight = wIcon / 2 + 'px';
		controller.style.marginLeft = wIcon / 2 + 'px';
		small_icon.style.left = picW / 2 - (small_icon.offsetWidth / 2 - 1) + 'px';
		third_pic.style.width = picW / 2 - wIcon / 2 + 'px';
		new getElement('.second_pic').getEl().style.width = picW / 2 + wIcon / 2 + 'px';
	}

	setHeight();

	window.onresize = function () {
		setHeight.call(this);
	};

	function makeActive() {
		if (event.target.classList.contains('button')) {
			var data = event.target.getAttribute('data-order');
			var buttons = document.getElementsByClassName('button');

			for (var i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('active');
			}
			event.target.classList.add('active');
			var dataBody = document.querySelector('.speed_container').getElementsByTagName('div');

			for (var i = 0; i < dataBody.length; i++) {
				if (data == i) {
					dataBody[i].style.display = 'block';
				} else {
					dataBody[i].style.display = 'none';
				}
			}
		}
	}

	var arr = new getElements('.button').on('click', makeActive);

	var a = document.querySelectorAll('#link');
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function (event) {
			for (var p = 0; p < a.length; p++) {
				a[p].classList.remove('active1');
			}
			this.classList.add('active1');
		};
	}
};