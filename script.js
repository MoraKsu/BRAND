function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function btnFunction() {
  document.getElementById("btnDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.btn__account')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.btn__dropdown')) {
    var myDropdown = document.getElementById("btnDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

document.addEventListener('click', function(event) {
  var dropdown = document.getElementById("basketDropdown");
  var basket = document.querySelector('.basket');

  var isClickInsideBasket = basket.contains(event.target) || dropdown.contains(event.target);

  if (!isClickInsideBasket) {
      dropdown.classList.remove('show');
  }
});

function basketFunction() {
  var dropdown = document.getElementById("basketDropdown");
  dropdown.classList.toggle("show");
}

window.onload = function(){
  slideOne();
  slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = "$" + sliderOne.value;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = "$" + sliderTwo.value;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #f16d7f ${percent1}% , #f16d7f ${percent2}%, #dadae5 ${percent2}%)`;
}



// var slideIndex = 0;
// showSlides();

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("slide__show");
    
//     if (slideIndex >= slides.length) { slideIndex = 0; }    
//     if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");  
//     }
    
//     slides[slideIndex].classList.add("active");  
// }