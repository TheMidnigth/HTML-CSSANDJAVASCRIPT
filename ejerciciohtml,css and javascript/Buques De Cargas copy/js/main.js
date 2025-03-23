document.addEventListener("DOMContentLoaded", function () {
    /* Carrusel Principal */
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

    /* Carrusel de Líneas Navieras */
    const navierasCarousel = document.querySelector('.lineas-navieras__carousel');
    const prevBtn = document.querySelector('.lineas-navieras__boton--prev');
    const nextBtn = document.querySelector('.lineas-navieras__boton--next');

    if (navierasCarousel && prevBtn && nextBtn) {
        const scrollStep = 220; // Tamaño del desplazamiento
        let autoScroll;

        // Función para duplicar elementos infinitamente
        function duplicateItems() {
            const items = [...navierasCarousel.children];
            items.forEach(item => {
                let clone = item.cloneNode(true);
                navierasCarousel.appendChild(clone);
            });
        }

        duplicateItems();

        function nextSlide() {
            navierasCarousel.scrollBy({ left: scrollStep, behavior: 'smooth' });

            if (navierasCarousel.scrollLeft + navierasCarousel.clientWidth >= navierasCarousel.scrollWidth - scrollStep) {
                duplicateItems();
            }
        }

        function prevSlide() {
            if (navierasCarousel.scrollLeft <= 0) {
                duplicateItems();
                navierasCarousel.scrollLeft = scrollStep * 5;
            }
            navierasCarousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        }

        function startAutoScroll() {
            autoScroll = setInterval(nextSlide, 3000);
        }

        function resetAutoScroll() {
            clearInterval(autoScroll);
            startAutoScroll();
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoScroll();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoScroll();
        });

        startAutoScroll();
    }

    

});
