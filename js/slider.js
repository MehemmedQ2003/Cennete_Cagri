const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('slider');
let currentIndex = 0;

function showSlide(index) {
    const width = slides.clientWidth;
    slides.style.transform = `translateX(-${index * width}px)`;
    
    dots.forEach(dot => dot.classList.remove('activeDots'));
    dots[index].classList.add('activeDots');
}

function getCurrentSlideIndex() {
    const sliderTop = slider.getBoundingClientRect().top;
    const slideHeight = slider.clientHeight;
    return Math.floor((window.scrollY - sliderTop + slideHeight) / slideHeight);
}

function updateSlideOnScroll() {
    const newIndex = getCurrentSlideIndex();
    if (newIndex >= 0 && newIndex < dots.length && newIndex !== currentIndex) {
        currentIndex = newIndex;
        showSlide(currentIndex);
    }
}

window.addEventListener('scroll', updateSlideOnScroll);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(index);
    });
});

showSlide(currentIndex);
