function name(fullname){
	return fullname();
}

console.log(
	name( function(){ return "embed" } )
);

/*
function name(fullname = {}){
	return fullname.firstname + " " + fullname.lastname;
}

console.log(
	name( { firstname: "Mau", lastname: "Hdez" } )
);
*/

/*
function name(){
	var fullname = "Mau Hdez";

	function concat(name){
		return "Mr. " + name;
	}

	return concat(fullname);
}
*/