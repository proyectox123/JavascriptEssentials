var select = document.getElementsByName('cars')[0];

select.onclick = function(event){
	console.log(event);
};

function clickCallback(event){
	console.log( 'Clicked by add event listener' );
}

select.addEventListener( 'click', clickCallback);

select.removeEventListener( 'click', clickCallback );