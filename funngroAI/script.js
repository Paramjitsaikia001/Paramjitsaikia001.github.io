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

// JavaScript for carousel navigation
// let currentIndex = 0;

// function moveSlide(direction) {
//   const slides = document.querySelectorAll('.slide');
//   const slidesToShow = 2; // Number of slides to show
//   const gap = 20; // Gap between slides
//   const slideWidth = 200 + gap; // Total width of a slide including the gap

//   const totalSlides = slides.length;

//   currentIndex += direction;

//   if (currentIndex < 0) {
//     currentIndex = totalSlides - slidesToShow;
//   } else if (currentIndex > totalSlides - slidesToShow) {
//     currentIndex = 0;
//   }

//   document.querySelector('.slider').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }
