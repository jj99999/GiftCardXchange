

var debbie = document.createElement('audio');
	       debbie.setAttribute('src', "assets/javascript/debbie.mp3");

var tribute = document.createElement('audio');
	       tribute.setAttribute('src', "assets/javascript/tribute.mp3");


$(document).ready(function(){


	debbie.play();
	debbie.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);



function katnissgone(){
	$("#screen2").css("display","block");
	$("body").css("background-image","url(assets/css/background.jpg");
	$("body").css("background-size","auto");
};

function katniss(){
	$("#screen2").css("display","none");
	$("body").css("background-image","url(assets/css/katniss.jpg");
	$("body").css("background-size","100%");
	tribute.play();
	setTimeout(katnissgone,1500);
};

function katnissloop(){
	katniss();
	setTimeout(katnissloop,120000);
};


setTimeout(katnissloop,5000)


});