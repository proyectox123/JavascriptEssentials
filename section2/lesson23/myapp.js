//console.log(this);//Window context

var object = {
	prop: this, //Window context
	method: function(){
		return this; //Object context
	}
};

var array = [
	this, //array[0]//Window context
	function() {
		return this;//Array context
	}
]

function global(){//This function returns the context from the element that call it
	return this;//Window object
}

global.call(object);//Object context