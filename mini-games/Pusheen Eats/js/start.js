window.onload = start;
document.addEventListener("keydown", KeyPressed, false);
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'audio/backgroundsong.mp3');
audioElement.setAttribute('loop', 'loop');
var isNeverClicked = 0;

$(document).ready(function() {
        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);
        $('.play').click(playMusic);		
    });

function playMusic() {
	isNeverClicked++;
	if(isNeverClicked %2 != 0){
		audioElement.play();
		$("#music").removeClass("play");
		$("#music").addClass("stop");
	}
	else{
		audioElement.pause();
		$( "#music").removeClass("stop");
		$( "#music").addClass("play");
	}
}

function start() {
	if(isPaused==false){
		NewLevel();
	}
}

function NewLevel() {
	level++;
	if (level == 1) {
		CreateItem("img/apple.png");
		MoveItem("img/apple.png");
	}
	if (level == 2) {
		CreateItem("img/cupcake.png");
		MoveItem("img/cupcake.png");
	}
	if (level == 3) {
		CreateItem("img/doughnut.png");
		MoveItem("img/doughnut.png");
	}
	if (level == 4) {
		CreateItem("img/meat.png");
		MoveItem("img/meat.png");
	}
	if (level == 5) {
		CreateItem("img/pizza.png");
		MoveItem("img/pizza.png");
	}
	if (level == 6 || level == 7) {
		CreateItem("img/like.png");
		MoveItem("img/like.png");
		for (var item in generateSpeeds) {
			item -= 500;
		}
	}
	setTimeout("NewLevel()", newLevel);
}