var heart = document.getElementById("heart");
var message = document.getElementById("message");
var facePic = document.getElementById("face")

var numLikes = 0;
var MAX_LEVEL = 10;
var LIKES_TO_LVLUP = 20;

function liked(){
  numLikes++;
  var levelNum = Math.floor(numLikes / LIKES_TO_LVLUP) + 1
  var likesToNextLvl = "(" + numLikes % LIKES_TO_LVLUP + "/" + LIKES_TO_LVLUP + ")"
  if(levelNum >= MAX_LEVEL){
  	  likesToNextLvl = " "
      levelNum = MAX_LEVEL
  }

  facePic.src = "assets/level" + levelNum + ".png";

  // friendship level Display:
  var p = document.getElementById("p");
  sendMessage("friendship level " + levelNum + "! " + likesToNextLvl);
  if(levelNum >= MAX_LEVEL){
          sendMessage("max friendship level reached !");
  }

  // heart animation
  var h = heart.cloneNode()
  h.className = ""
  h.style["animation-name"] = "liked"
  h.style["animation-duration"] = "1s"

  h.className = "animate";
  document.getElementById("game").appendChild(h)
	
  // delete the heart when the animation is done to prevent clutter
  h.addEventListener("animationend", function(){
  	h.remove()
  }); 
}

function sendMessage(msg){
	p.textContent = "> " + msg;
}

function newComment(event){
	if (event.keyCode == 13){ //if enter was pressed
		var p = document.getElementById("p")
		var commentsBox = document.getElementById("comments")
		sendMessage(commentsBox.value) // set text to textbox text
		commentsBox.value = ""; // clear textbox text
      }
}

//events!!

message.addEventListener("keydown",newComment)
document.getElementById("btn").addEventListener("click", liked)
