
// const slides = document.querySelectorAll('.slide');
// const next = document.getElementById("nextButton");
// const prev = document.getElementById("prevButton");
// const progressBar = document.getElementById("progressBar"); // Select the progress bar
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.top = `${index * 100}%`;
// });

// const goNext = () => {
//     counter++;
//     if (counter >= 1) {
//         prev.style.display = "inline";
//     }
//     if (counter === slides.length - 1) {
//         next.style.display = "none";
//     }
//     slideImage();
// };

// const goPrev = () => {
//     counter--;
//     if (counter <= slides.length - 2) {
//         next.style.display = "inline";
//     }
//     if (counter === 0) {
//         prev.style.display = "none";
//     }
//     slideImage();
// };

// const slideImage = () => {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateY(-${counter * 100}%)`;
//     });
//     updateProgressBar();
// };

// const updateProgressBar = () => {
//     const progressPercent = ((counter + 1) / slides.length) * 100;
//     progressBar.style.width = `${progressPercent}%`;
// };

// // Auto slide with interval and stop at last slide
// const intervalID = setInterval(() => {
//     if (counter === slides.length - 1) {
//         clearInterval(intervalID);
//     } else {
//         goNext();
//     }
// }, 4000);

//snippets 1
const slides = document.querySelectorAll('.slide');
const progressBar = document.querySelectorAll(".indicator-circle");
const next = document.getElementById("nextButton");
const prev = document.getElementById("prevButton");
const indicators = document.querySelectorAll('.indicator-circle');
var counter=0;
var intervalID;

slides.forEach((slide, index) =>{
    slide.style.top = `${index * 100}%`;
})
const activeImage = (indicator) =>{
    clearInterval(intervalID);
    counter = indicator;
    buttonStyling();
    slideImage();
    DynamicSlider();
};
const goNext = () =>{
    clearInterval(intervalID);
    counter=counter+1;
    buttonStyling();
    slideImage();
    DynamicSlider();
}
const goPrev = () =>{
    clearInterval(intervalID);
   counter=counter-1;
   buttonStyling();
    slideImage();
    DynamicSlider();
}
const slideImage = ()=>{
    slides.forEach((slide) =>{
        slide.style.transform = `translateY(-${counter * 100}%)`;
    })
    updateIndicator();
}
function updateIndicator() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === counter);
    });
}
function DynamicSlider(){
    intervalID = setInterval(()=>{
        if(counter >= 2){
            clearInterval(intervalID);
        }
        console.log(counter);
        counter=(counter+1);
        buttonStyling();
        slideImage();
    }, 5000);
}
function buttonStyling(){
    if(counter == 0){
        prev.style.display = "none";
    }else{
        prev.style.display = "inline";
    }
    if(counter == 3){
        next.style.display = "none";
    }else{
        next.style.display = "inline";
    }
}
DynamicSlider();