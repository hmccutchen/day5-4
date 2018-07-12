
//FIGURE OUT WHY THIS VERSION OF THE SCROLL FUNCTION ISNT WORKING

// window.addEventListener("scroll", function(){
//   var scrolling = window.pageYOffset;
// // scrolling += 1;
//   var about = document.querySelector("p");

// if(scrolling > 200){
//   about.classList.add("animated");
//   about.classList.add("jackInTheBox");
// }

// });

window.addEventListener("scroll", function(){
  var scroll = window.pageYOffset;

  var x = document.querySelector("p");
  console.log(x);
  // x.classList.add("reveal");

  if(scroll > 500){
    x.classList.add("tada");
  } else{
    x.classList.remove("tada");
  }
})



var button = document.getElementById("call-to-action");

button.addEventListener("click", function(){

var footer = document.querySelector("footer");

 footer.classList.add(randomColor());

})


function randomColor(){
var x = document.querySelector("footer");
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  var r = `rgb(${a},${b},${c})`;
  x.style.backgroundColor = r;
}


function smoothScroll(){
document.querySelector('#about-banner').scrollIntoView({
  behavior: 'smooth'
});
}

// function scrollWhip(){
// var banner = document.querySelector("#about-banner");
// var about = document.getElementById("about-link");
//    banner.scrollIntoView({behavior: "smooth"})

// }








