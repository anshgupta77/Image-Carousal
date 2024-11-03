const slides = document.querySelectorAll('.slide');
const next = document.getElementById("nextButton");
const prev = document.getElementById("prevButton");
var counter=0;

slides.forEach((slide, index) =>{
    slide.style.top = `${index * 100}%`;
})
const goNext = () =>{
    counter++;
    if(counter>=1){
        prev.style.display = "inline"
    }
    if(counter == 3){
        next.style.display = "none";
    }
    slideImage();
}
const goPrev = () =>{
   counter--;
   if(counter<=2){
        next.style.display = "inline"
   }
   if(counter == 0){
       prev.style.display = "none";
   }
    slideImage();
}
const slideImage = ()=>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateY(-${counter * 100}%)`;
    })
}