function canAcrossTheRoad(greenMan, carsLeft, carsRight){
	if(greenMan === true && carsLeft === 0 && carsRight === 0){
		console.log("All clear! Cross the road");
	}
	else{
		console.log("Stay where you are!");
	}
}

canAcrossTheRoad(true , 0, 0)
canAcrossTheRoad(true , 1, 0)
canAcrossTheRoad(true , 0, 1)
canAcrossTheRoad(false, 0, 0)
canAcrossTheRoad(false, 1, 0)
canAcrossTheRoad(false, 0, 1)