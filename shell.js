document.addEventListener('DOMContentLoaded',function(){
	var rect = document.getElementsByClassName('box');
	//rect.addEventListener('click',function())
	var gameOver = false;



	var box1 = document.getElementById('box1');
	box1.addEventListener('click',function(){
		if(gameOver===false){
			var clickedBox = 1;
			//var winningBox = getRandomNumber();
			if(clickedBox===getRandomNumber()){
				alert("you got it")
			} else {
				alert("next time.")
			}
			gameOver = true;
		}

	});

	var box2 = document.getElementById('box2');
	box2.addEventListener('click',function(){
		if(gameOver===false){
		var clickedBox = 2;
		//var winningBox = getRandomNumber();
		if(clickedBox===getRandomNumber()){
			alert("you got it")
		} else {
			alert("next time.")
		}
		gameOver=true
		}

	});

	var box3 = document.getElementById('box3');
	box3.addEventListener('click',function(){
		if(gameOver===false){
		var clickedBox = 3;
		//var winningBox = getRandomNumber();
		if(clickedBox===getRandomNumber()){
			alert("you got it")
		} else {
			alert("next time.")
		}
		gameOver=true

		}

	});

		var playAgainButton = document.getElementById('playagain');
		playAgainButton.addEventListener('click',function(){

			location.reload();
		})	


})

//var randomNumber = Math.ceil(Math.random()*3);
function getRandomNumber(){
	return	Math.ceil(Math.random()*3)

}