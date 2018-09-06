class getElements {
	constructor(selector){
		this.elems = document.querySelectorAll(selector);
	}
	on(event,callback){
		for(var i = 0; i<this.elems.length; i++){
			this.elems[i].addEventListener(event,callback);
		}
		return this;
	}
	onn(callback){
		for(var i = 0; i<this.elems.length; i++){
			this.elems[i].addEventListener(callback);
		}
		return this;
	}
};

class getElement extends getElements{
	constructor(selector){
		super(selector);
		this.elem = document.querySelector(selector);
	}
	getEl(){
		return this.elem;
	}
};

export {getElements, getElement};