var controls = document.getElementById('controls');
var background = document.getElementById('background');
var inptitle = document.getElementById('inptitle');
var inpdes = document.getElementById('inpdes');
var title = document.getElementById('title');
var des = document.getElementById('description');
var color = document.getElementById('color');



function expandMenu(){
 controls.style.bottom = "0px";
};


var url = document.getElementById("url");

function changeBG(){
	for ( var i=1; i < j+2  ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
 	background.style.backgroundImage = "url("+url.value+")";
 	document.getElementById("background"+i).style.backgroundImage = "url("+url.value+")"; //FINAL CHALLENGE
}};
function changeTitle(){
	for ( var i=1; i < j+2  ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
 	title.innerText = inptitle.value;
 	document.getElementById("title"+i).innerText = inptitle.value; //FINAL CHALLENGE
}};
function changeDescripton(){
	for ( var i=1; i < j+2  ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
 	description.innerText = inpdes.value;
 	document.getElementById("description"+i).innerText = inpdes.value;  //FINAL CHALLENGE
}};
function changeColor(){
	for ( var i=1; i < j+2  ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
	title.style.color = color.value;
	document.getElementById("title"+i).style.color = color.value; //FINAL CHALLENGE
 	description.style.color = color.value;
 	document.getElementById("description"+i).style.color = color.value; //FINAL CHALLENGE
}


//Important Note: i < j + 2 : for the best performance, to avoid bug (freezing input box if we put i = j , or something like that).


}


url.addEventListener("keyup", function(ev){
console.log(ev.keyCode);
var strg = url.value;
for ( var i=1; i < j+2 ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
if(ev.keyCode == 13){
	changeBG();
}
else if (strg == "horse"){  //Q4
	background.style.backgroundImage = "url(./img/bg1.jpg)";
	document.getElementById("background"+i).style.backgroundImage = "url(./img/bg1.jpg)"; //FINAL CHALLENGE

}
else if (strg == "night"){  //Q4
	background.style.backgroundImage = "url(./img/bg2.jpg)";
	document.getElementById("background"+i).style.backgroundImage = "url(./img/bg2.jpg)"; //FINAL CHALLENGE
}
else if (strg == "mountain"){   //Q4
	background.style.backgroundImage = "url(./img/bg3.jpg)";
	document.getElementById("background"+i).style.backgroundImage = "url(./img/bg3.jpg)"; //FINAL CHALLENGE
}
else if (strg.indexOf("epic") !== -1){   //Q4
	background.style.backgroundImage = "url(./img/bg4.jpg)";
	document.getElementById("background"+i).style.backgroundImage = "url(./img/bg4.jpg)"; //FINAL CHALLENGE
}}
});





inptitle.addEventListener("keyup", function(ev){
console.log(ev.keyCode);
if(ev.keyCode == 13){
	changeTitle();
}
});
inpdes.addEventListener("keyup", function(ev){
console.log(ev.keyCode);
if(ev.keyCode == 13){
	changeDescripton();
}
});


// LEVEL 3 - CALCULATIONS

// left :37
// right: 39
// up: 38
// down: 40
// + : 187
// - : 189


var x = 0;
var y = 0;
var z = 300;
// $(document).keydown(function(moveBG){  for jQuery
	document.addEventListener("keydown", function(moveBG){
	console.log(moveBG.keyCode);

for ( var i=1; i < j+2 ;i++){ //FINAL CHALLENGE : create a loop to affect all the new elements
    if(moveBG.keyCode == 38) {//up
      y -= 10;
      background.style.backgroundPositionY = y + "px";
      document.getElementById("background"+i).style.backgroundPositionY = y + "px"; //FINAL CHALLENGE
 
    }
    else if(moveBG.keyCode == 40) {//down
      y += 10;
      background.style.backgroundPositionY = y + "px";
      document.getElementById("background"+i).style.backgroundPositionY = y + "px"; //FINAL CHALLENGE
    }
    else if(moveBG.keyCode == 37) {//left
      x -= 10;
      background.style.backgroundPositionX = x + "px";
      document.getElementById("background"+i).style.backgroundPositionX = x + "px"; //FINAL CHALLENGE
    }
    else if(moveBG.keyCode == 39) {//right
      x += 10;
      background.style.backgroundPositionX = x + "px";
      document.getElementById("background"+i).style.backgroundPositionX = x + "px"; //FINAL CHALLENGE
    }
     else if(moveBG.keyCode == 187) {//+
      z += 10;
      background.style.height = z + "px";
      document.getElementById("background"+i).style.height = z + "px"; //FINAL CHALLENGE
    }
    else if(moveBG.keyCode == 189) {//-
      z -= 10;
      background.style.height = z + "px";
      document.getElementById("background"+i).style.height = z + "px"; //FINAL CHALLENGE
    }}
});


// LEVEL 4 - IF/ELSE

// DONE

// LEVEL 5 - FUNCTIONS

// DONE

// LEVEL 6 - CREATING NEW ELEMENTS

var j = 0;
function createBG(){
	var newbg = document.createElement("div");
	var newtitle = document.createElement("div");
	var newdescription = document.createElement("div");
	j += 1;
	newbg.className = "bg";
	newbg.id = "background"+j;
	newtitle.className = "name";
	newtitle.id = "title"+j;
	newdescription.className = "content";
	newdescription.id = "description"+j;
	newbg.style.cssText = background.style.cssText;
	document.getElementById("display").appendChild(newbg);
	document.getElementById("background"+j).appendChild(newtitle);
	document.getElementById("background"+j).appendChild(newdescription);
	document.getElementById("title"+j).innerText = title.innerText;
	document.getElementById("description"+j).innerText = description.innerText;
	document.getElementById("title"+j).style.cssText = title.style.cssText;
	document.getElementById("description"+j).style.cssText = description.style.cssText;
	document.getElementById("description"+j).contentEditable = "true"; //BONUS : to edit new element
	document.getElementById("title"+j).contentEditable = "true"; //BONUS : to edit new element
}

// LEVEL 6.2 - BOOTSTRAP: not done yet

// FINAL CHALLENGE Done

//BONUS : got a plan

// Title + Description editable: Done
// Change a background + transformation : I GAVE UP



