document.addEventListener("DOMContentLoaded", function () {  
    /*Carrusel */
    const carouselList = document.querySelector(".carousel__list");
    const slides = document.querySelectorAll(".list__unit");
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideDuration = 4000; 
    let interval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselList.style.transform = `translateX(${offset}%)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        restartInterval();
    }

    function restartInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, slideDuration);
    }

    // Agregar evento a los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => goToSlide(index));
    });

    // Iniciar el carrusel
    interval = setInterval(nextSlide, slideDuration);
    updateCarousel();

    
});
