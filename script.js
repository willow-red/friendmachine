var heart = document.getElementById("heart");
var message = document.getElementById("message");
var facePic = document.getElementById("face")

var heart1 = document.getElementById("heartSpam1");
var heart2 = document.getElementById("heartSpam2");
var heart3 = document.getElementById("heartSpam3");

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

  // spam hearts
  if(levelNum >= MAX_LEVEL){
    // heart1:
    heart1.className = ""
    heart1.style["animation-name"] = "liked"
    heart1.style["animation-duration"] = "1s infinite"
    heart1.className = "spam";
    // heart2:
    heart2.className = ""
    heart2.style["animation-name"] = "liked"
    heart2.style["animation-duration"] = "1s infinite"
    heart2.className = "spam";
    // heart3:
    heart3.className = ""
    heart3.style["animation-name"] = "liked"
    heart3.style["animation-duration"] = "1s infinite"
    heart3.className = "spam";
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
  var levelMessage = ""
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
