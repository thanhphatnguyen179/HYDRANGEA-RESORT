// Start Slider

var slideIndex = 0;
showDivs(slideIndex);

carousel();

function plusDiv(n) {
  showDivs(slideIndex += n);
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// End Slider

// Start Form

var a = document.getElementById("login");
var b = document.getElementById("sign-up");
var c = document.getElementById("button-color");

function signup(){
  a.style.left = "-400px";
  b.style.left = "50px";
  c.style.left = "140px";
}

function login(){
  a.style.left = "50px";
  b.style.left = "450px";
  c.style.left = "0";
}

// End Form