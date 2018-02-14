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

car.make = "Ford";
car.make += " 100";

car.engine = { newengine: "New Engine" }

car.drive = "drive";

car.model = "v60";
//car.color;
car.color = "red";

car.stop = function(){
	return "Stop!!!!!";
}

console.log(car);
console.log("******************");

delete car.model;

console.log(car);