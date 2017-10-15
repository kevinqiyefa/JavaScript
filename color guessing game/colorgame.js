var numSquares = 6
var colors = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init(){
	//mode listener
	setupModeListener();

	//squares listener
	setupSquareListener();

	reset();

}

function setupModeListener(){
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;

			reset();

		}); 
	}

}

function setupSquareListener(){
	for (var i = 0; i < square.length; i++) {

		//add click listeners to square 
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.background;

			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.background = "#232323";

				messageDisplay.textContent = "Try Again";
			}

		});
	}
}


function reset(){

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < square.length; i++) {
		//add initial color to squares
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.background = colors[i];
 		} else{
 			square[i].style.display = "none";
 		}
	}
	resetButton.textContent = "Next Colors";
	h1.style.background = "steelblue";

	messageDisplay.textContent ="";

}



resetButton.addEventListener("click",function(){

	reset();

});




function changeColors(color) {

	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){

	var a = []
	for (var i = 0; i < num; i++) {
		a.push(randomColor());
	}

	return a;

}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}
