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

console.log(car.make);
console.log(car.speed);
console.log(car.engine);
console.log(car.engine.size);
console.log(car.engine.make);
console.log(car.engine.fuel);
console.log(car.engine.pistons[0]);
console.log(car.engine.pistons[0].maker);
console.log(car.drive);
console.log(car.drive());

