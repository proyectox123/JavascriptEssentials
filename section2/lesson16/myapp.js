var car = {
	make: "volvo",
	speed: 160,
	engine: {
		size: 2.0,
		make: "BMW",
		fuel: "Petrol",
		pistons: [{
			maker: "BMW"
		},
		{
			maker: "BMW2"
		}]
	},
	drive: function(){ 
		return "Drive!!!";
	}
};

var array = [
	"String",
	100,
	[
		"embed", 200
	], 
	{
		car: "Ford"
	},
	function(){
		return "Drive";
	}
];

console.log(car.engine.pistons[0]);
console.log(car.engine.pistons[1]);

console.log(array[4]);
console.log(array[4]());
console.log(array[ 1 + 1 - 2 ]);

var a = 10
console.log(array[ a - 5 - 2 ]);

console.log(car["make"]);
console.log(car["engine"]["pistons"]);
console.log(car["engine"]["pistons"][1]);
console.log(car["engine"]["pistons"][1]["maker"]);

console.log(car["drive"]);
console.log(car["drive"]());