// slide popular
var slidesPo= document.querySelector(".course-list_slide");
var prevButton = document.querySelector('.prev');
console.log(prevButton);
var nextButton = document.querySelector('.next');
var slideCounts= document.querySelectorAll(".course-item").length;
var slidesToShow = 3;
var slideWidth = 100 / slidesToShow;
let currentIndextSlide=0;

function showSlidePo(index){
    if(index >= slideCounts){
       currentIndextSlide =0;
    }else if(index<0){
        currentIndextSlide = slideCounts - slidesToShow;
    }else{
        currentIndextSlide = index;
    }
    slidesPo.style.transform = `translateX(-${currentIndextSlide * slideWidth}%)`;
}
prevButton.addEventListener('click' ,() =>{
    showSlidePo(currentIndextSlide -1);
})
nextButton.addEventListener('click', () => {
    showSlidePo(currentIndextSlide + 1);
});

// slide feedback
var slides  = document.querySelector(".show-sliders")
var dots = document.querySelectorAll('.dot');
var slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
function showSlide(index) {
    if (index >= slideCount) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideCount - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
    });
});


setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);
