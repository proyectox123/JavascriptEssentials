var classRegister = ["A", "B", "C", "D", "E"];

console.log("Using for from start");
for(var i = 0; i < classRegister.length; i++){
	console.log(classRegister[i]);
}

console.log("Using for from end");
for(var i = classRegister.length - 1; i >= 0; i--){
	console.log(classRegister[i]);
}

console.log("Using for in loop");
for(var i in classRegister){
	console.log(classRegister[i]);
}

console.log("Using foreach");
classRegister.forEach(item => console.log(item));