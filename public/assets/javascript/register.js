
var tonto = document.createElement('audio');
	       tonto.setAttribute('src', "assets/images/tonto.mp3");


$(document).ready(function(){


	tonto.play();
	tonto.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);


});