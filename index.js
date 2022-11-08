var randomNumber1 = Math.floor(Math.random()*6+1);
var randomImage1 = document.querySelectorAll("img")[0];
var randomImageSource =  "images/dice"+ randomNumber1 +".png";
randomImage1.setAttribute("src",  randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomImage2 = document.querySelectorAll("img")[1];
var randomImageSource = "images/dice"+ randomNumber2 +".png";
randomImage2.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
