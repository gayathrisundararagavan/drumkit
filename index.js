
function makeSound(key){
  switch (key) {
   case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;
     case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
      case "d":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;
       case "j":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
         case "b":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;
           case "l":
             var snare= new Audio("sounds/snare.mp3");
             snare.play();
             break;
             default: alert("enter the given key");

}
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
// detecting button pressed
var numberOfButton = document.querySelectorAll(".drum").length;
for (var i =0; i<numberOfButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonLetter = this.innerHTML;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter);
  });
}
// detecting keypress
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
