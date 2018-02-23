if(true){
	var symbolName = "Value reference in memory"; //It doesn't respect the scope.

	let letSymbol = "Scoped value"; //It respect the scope.

	const symName = "Constant value in memory"; //It respect the scope.
}

for(let i=0; i < 3; i++){
	
	var symbolName = "Value reference in memory"; //It doesn't respect the scope.

	let letSymbol = "Scoped value"; //It respect the scope.

	const symName = "Constant value in memory"; //It respect the scope.
}

function check(){
	var symbolName = "Value reference in memory"; //It respect the scope.

	let letSymbol = "Scoped value"; //It respect the scope.

	const symName = "Constant value in memory"; //It respect the scope.
}