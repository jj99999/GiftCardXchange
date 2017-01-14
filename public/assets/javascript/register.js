
var requiem = document.createElement('audio');
	       requiem.setAttribute('src', "assets/images/requiem.mp3");


$(document).ready(function(){


	requiem.play();
	requiem.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);


});