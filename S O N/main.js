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

// Start search-box

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//     document.getElementById("search-box").style.top = "0";
//   } else {
//     document.getElementById("search-box").style.top = "880px";
//   }
// }

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("search-box");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(window).scroll(function(){
  var sticky = $('#search-box'),
      scroll = $(window).scrollTop();
  var height = $('.slide').height();

  if (scroll >= height) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

// End search-box

// Start Responsive of Navigation


function myFunction() {
  var x = document.getElementById("navil");
  if (x.className === "navi-left") {
    x.className += " responsive";
  } else {
    x.className = "navi-left";
  }
  var y = document.getElementById("navir");
  if (y.className === "navi-right") {
    y.className += " responsive";
  } else {
    y.className = "navi-right";
  }
}

// End Responsive of Navigation
