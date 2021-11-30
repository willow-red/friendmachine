var heart = document.getElementById("heart");
var message = document.getElementById("message");
var facePic = document.getElementById("face")

var numLikes = 0;
var MAX_LEVEL = 10;
// animation:
function liked(){
  numLikes++;
  var levelNum = Math.floor(numLikes / 20) + 1
  if(levelNum > MAX_LEVEL){
  	levelNum = MAX_LEVEL
  }

  facePic.src = "level" + levelNum + ".png";
  // friendship level Display:
  var p = document.getElementById("p");
  p.textContent = "> friendship level " + levelNum + "!";

  //create an animated heart every click by duplicating the existing static heart
  //and applying the animation to it, that way the hearts never run out :)
  var h = heart.cloneNode()
  h.className = ""
  h.style["animation-name"] = "liked"
  h.style["animation-duration"] = "1s"

  h.className = "animate";
  document.getElementById("game").appendChild(h)
}

function newComment(event){
	if (event.keyCode == 13){ //if enter was pressed
		var p = document.getElementById("p")
		var commentsBox = document.getElementById("comments")
		p.textContent = commentsBox.value // set text to textbox text
		commentsBox.value = ""; // clear textbox text
      }
}

//events!!

message.addEventListener("keydown",newComment)
document.getElementById("btn").addEventListener("click", liked)
