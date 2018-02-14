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
		return "drive";
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