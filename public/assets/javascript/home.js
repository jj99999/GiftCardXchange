var jfk = document.createElement('audio');
	       jfk.setAttribute('src', "assets/javascript/asknot.wav");

var debbie = document.createElement('audio');
	       debbie.setAttribute('src', "assets/javascript/debbie.mp3");


$(document).ready(function(){
	jfk.play()
	// .then(setTimeout(startscreen,10200));
	jfk.addEventListener('ended', function() {
   		startscreen();
		}, false);


function startscreen(){
	jfk.pause();
	jfkgif.remove();
	$("#screen1").css("display","block");
	debbie.play();
	debbie.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);
}













// $("#submitname").on("click", function(){

// 		if (numberofplayers<2){

// 		var playerid=$("#playername").val().trim().toUpperCase();
// 		var playerwins=0;
// 		var playerlosses=0;

// 		var newplayer = {
// 			name: playerid,
// 			wins: playerwins,
// 			losses: playerlosses,
// 			guess: ""
// 		}

// 		database.ref('/players').push(newplayer);
// 	}

// 	else {
// 		alert("We already have 2 players. Wait your turn, dumbass.");
// 		$("#playername").val("");
// 	}

// });





});