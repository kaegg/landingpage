$(document).ready(function() {

  $('.circle2').animate({
    left:'-50%'
  },1000),

  $('.circle4').animate({
    left:'70%'
  },1000)

})


const text = "Software Engineer";
const interval = 300;

function showText(text, interval){

  const char = text.split("").reverse();
  const type = setInterval(() => {
    
    if(!char.length){
      return clearInterval(type);
    }

    const next = char.pop();
    document.getElementsByClassName("typing")[0].innerHTML += next;
    // console.log(next);

  }, interval)

}

showText(text, interval); 

function next() {
  
  const currentImg = document.querySelector(".carousel-selected");
  const nextImg = currentImg.nextElementSibling || document.querySelector(".image-carousel");
  currentImg.className = currentImg.className.replace("carousel-selected", "image-carousel");
  nextImg.className = nextImg.className.replace("image-carousel", "carousel-selected");

}

function prev(){
  
  const currentImg = document.querySelector(".carousel-selected");
  const prevImg = currentImg.previousElementSibling || document.querySelector(".image-carousel");
  currentImg.className = currentImg.className.replace("carousel-selected", "image-carousel");
  prevImg.className = prevImg.className.replace("image-carousel", "carousel-selected");

}