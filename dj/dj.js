var box = document.getElementById("box")

var header = document.getElementById("header");
header.style.color = "purple";
header.style.textAlign = "center";

document.body.style.backgroundColor = "black";

var button = document.getElementById("btn");
box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green"
})
var button = document.getElementById("btn");
box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue"
})
var button = document.getElementById("btn");
box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red"
})
var button = document.getElementById("btn");
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow"
})
var button = document.getElementById("btn");
box.addEventListener("mouseout", function(){
    box.style.backgroundColor = "orange"
})
var colorChange = function(key){
    if (key.keyCode == 82) {
        box.style.backgroundColor = "red"
    } else if(key.keyCode == 66) {
        box.style.backgroundColor = "blue"
    } else if(key.keyCode == 89 ){
        box.style.backgroundColor = "yellow"
    } else if(key.keyCode == 71 ){
        box.style.backgroundColor = "green"
    } else if (key.keyCode == 79 ) {
        box.style.backgroundColor = "orange"
    } else {console.log ("sorry not a useable key!")}
}
window.addEventListener("keyup", colorChange) 


//key events//












