document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel');

    const carouselHTML = `
      <section class="carousel-container">
        <div class="carousel-track">
            <div class="carousel-slide">
                <img src="https://picsum.photos/1440/335?random=1" alt="Banner 1">
                <div class="carousel-card-overlay">
                    <h1 class="carousel-card-title">LOREM IPSUM</h1>
                    <p class="carousel-card-subtitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <button class="carousel-card-button">Ver Curso</button>
                </div>
            </div>
            <div class="carousel-slide">
                <img src="https://picsum.photos/1440/335?random=2" alt="Banner 2">
                <div class="carousel-card-overlay">
                    <h1 class="carousel-card-title">LOREM IPSUM</h1>
                    <p class="carousel-card-subtitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <button class="carousel-card-button">Ver Curso</button>
                </div>
            </div>
            <div class="carousel-slide">
                <img src="https://picsum.photos/1440/335?random=3" alt="Banner 3">
                <div class="carousel-card-overlay">
                    <h1 class="carousel-card-title">LOREM IPSUM</h1>
                    <p class="carousel-card-subtitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <button class="carousel-card-button">Ver Curso</button>
                </div>
            </div>
            <div class="carousel-slide">
                <img src="https://picsum.photos/1440/335?random=4" alt="Banner 4">
                <div class="carousel-card-overlay">
                    <h1 class="carousel-card-title">LOREM IPSUM</h1>
                    <p class="carousel-card-subtitle">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <button class="carousel-card-button">Ver Curso</button>
                </div>
            </div>
        </div>
        <div class="carousel-indicator"></div>
        <button class="carousel-prev"><i class="fa fa-chevron-left"></i></button>
        <button class="carousel-next"><i class="fa fa-chevron-right"></i></button>
    </section>
    `;

    carouselContainer.innerHTML = carouselHTML;

    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelector('.carousel-indicator');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentSlide = 0;

    // Criando indicadores para cada slide
    slides.forEach(() => {
        const indicator = document.createElement('span');
        indicators.appendChild(indicator);
    });

    // Atualizando o carrossel
    function updateCarousel() {
        const track = document.querySelector('.carousel-track');
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        const allIndicators = indicators.querySelectorAll('span');
        allIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    updateCarousel();

    // Navegação anterior
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateCarousel();
    });

    // Navegação próxima
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        updateCarousel();
    });

    // Indicadores de navegação
    indicators.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            currentSlide = Array.from(indicators.children).indexOf(e.target);
            updateCarousel();
        }
    });
});
