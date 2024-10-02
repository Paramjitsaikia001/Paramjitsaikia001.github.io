const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// JavaScript for animating the numbers
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the slower

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+";
    }

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText.replace(/,/g, '').replace('+', '');

            const time = value / speed;
            if (data < value) {
                counter.innerText = formatNumber(Math.ceil(data + time));
                setTimeout(animate, 1);
            } else {
                counter.innerText = formatNumber(value);
            }
        }

        // Check if the element is in view
        const inView = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        const onScroll = () => {
            if (inView(counter)) {
                animate();
                window.removeEventListener('scroll', onScroll);
            }
        }

        window.addEventListener('scroll', onScroll);
    });
});


let currentSlide = 0;
const Projectslides = document.querySelectorAll('.projects-ideas-slide');
const Projectslider = document.querySelector('.projects-ideas-slider');
const ProjectprevButton = document.getElementById('prev');
const ProjectnextButton = document.getElementById('next');

// Show the correct number of slides per view based on screen size
function getSlidesPerView() {
    if (window.innerWidth <= 780) {
        return 1; // Mobile: 1 slide per view
    } else if (window.innerWidth <= 1200) {
        return 2; // Tablet: 2 slides per view
    } else {
        return 3; // Desktop: 3 slides per view
    }
}

// Show the appropriate number of slides and ensure it wraps around when at the end
function updateSlider() {
    const slidesPerView = getSlidesPerView();
    Projectslider.style.transform = `translateX(-${currentSlide * 100 / slidesPerView}%)`;
}

ProjectnextButton.addEventListener('click', () => {
    const slidesPerView = getSlidesPerView();
    if (currentSlide < Projectslides.length - slidesPerView) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the beginning
    }
    updateSlider();
});

ProjectprevButton.addEventListener('click', () => {
    const slidesPerView = getSlidesPerView();
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = Projectslides.length - slidesPerView; // Go to the last set of slides
    }
    updateSlider();
});

// Optional: Recalculate the number of slides per view on window resize
window.addEventListener('resize', updateSlider);







let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.fun-reviews-slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// For larger screens: 3 slides at a time, with looping
function slideNextLargeScreen() {
    if (currentIndex < slides.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first slide
    }
    slider.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`; // 3 slides transition
}

function slidePrevLargeScreen() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 3;  // Loop back to the last set of slides
    }
    slider.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`; // 3 slides transition
}

// For medium screens: 2 slides at a time, with looping
function slideNextMediumScreen() {
    if (currentIndex < slides.length - 2) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first slide
    }
    slider.style.transform = `translateX(-${currentIndex * (100 / 2)}%)`; // 2 slides transition
}

function slidePrevMediumScreen() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 2;  // Loop back to the last set of slides
    }
    slider.style.transform = `translateX(-${currentIndex * (100 / 2)}%)`; // 2 slides transition
}

// For smaller screens: 1 slide at a time, with looping
function slideNextSmallScreen() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first slide
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 1 slide transition
}

function slidePrevSmallScreen() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;  // Loop back to the last slide
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // 1 slide transition
}

// Initialize the slider based on window width
function initializeSlider() {
    if (window.innerWidth <= 800) {
        // Small screens: 1 slide, looping
        nextButton.removeEventListener('click', slideNextLargeScreen);
        prevButton.removeEventListener('click', slidePrevLargeScreen);
        nextButton.removeEventListener('click', slideNextMediumScreen);
        prevButton.removeEventListener('click', slidePrevMediumScreen);
        nextButton.addEventListener('click', slideNextSmallScreen);
        prevButton.addEventListener('click', slidePrevSmallScreen);
    } else if (window.innerWidth > 800 && window.innerWidth <= 1000) {
        // Medium screens: 2 slides, looping
        nextButton.removeEventListener('click', slideNextLargeScreen);
        prevButton.removeEventListener('click', slidePrevLargeScreen);
        nextButton.removeEventListener('click', slideNextSmallScreen);
        prevButton.removeEventListener('click', slidePrevSmallScreen);
        nextButton.addEventListener('click', slideNextMediumScreen);
        prevButton.addEventListener('click', slidePrevMediumScreen);
    } else {
        // Larger screens: 3 slides, looping
        nextButton.removeEventListener('click', slideNextSmallScreen);
        prevButton.removeEventListener('click', slidePrevSmallScreen);
        nextButton.removeEventListener('click', slideNextMediumScreen);
        prevButton.removeEventListener('click', slidePrevMediumScreen);
        nextButton.addEventListener('click', slideNextLargeScreen);
        prevButton.addEventListener('click', slidePrevLargeScreen);
    }
}

// Initialize the slider on page load
initializeSlider();

// Reinitialize slider on window resize
window.addEventListener('resize', initializeSlider);
