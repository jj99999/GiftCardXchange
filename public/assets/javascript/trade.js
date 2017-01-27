
$(document).ready(function(){


function waitingfor(){
  $("#waiting1").css("display","block");
  $("#waiting2").css("display","block");
  $("#waiting3").css("display","block");  
}

function fadein(){
  $("#waiting1").animate({opacity: '1'});
  $("#waiting2").animate({opacity: '1'});
  $("#waiting3").animate({opacity: '1'});
}

function textswap(){
  $("#waiting1").css("display","none");
  $("#waiting2").css("display","none");
  $("#waiting2").css("display","none");
  $("#result1").css("display","block");
  $("#result2").css("display","block");
  $("#result3").css("display","block");
  $("#result4").css("display","block");
  $("#result5").css("display","block");
  $("#result6").css("display","block");
}

function textgone(){
  $("#result1").css("display","none");
  $("#result2").css("display","none");
  $("#result3").css("display","none");
  $("#result4").css("display","none");
  $("#result5").css("display","none");
  $("#result6").css("display","none");
}

function textflash(){
  textgone();
  setTimeout(textswap,200);
  setTimeout(textgone,400);
  setTimeout(textflash,400);
}

$("#offercard").on("click",function(){
  waitingfor();
  setTimeout(fadein,1000);
  setTimeout(textswap,6000);
  setTImeout(textflash,6200);
})










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