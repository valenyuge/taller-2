document.addEventListener('DOMContentLoaded', function() {

  

    const stepButtons = document.querySelectorAll('[data-target]');
    const portadaContenido = document.querySelector('.portada-contenido');
    
    // Al cargar la página, muestra el primer paso
    if(portadaContenido) { // Asegurarnos de que estamos en la página correcta
        const initialStep = document.querySelector('#step-1');
        if (initialStep) {
            initialStep.classList.add('visible');
        }

        stepButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // Encuentra el paso actualmente visible y lo oculta
                const currentVisibleStep = portadaContenido.querySelector('.step-container.visible');
                if (currentVisibleStep) {
                    currentVisibleStep.classList.remove('visible');
                }
                
                // Muestra el nuevo paso
                const targetId = this.dataset.target;
                const targetStep = document.querySelector(targetId);

                if (targetStep) {
                    targetStep.classList.add('visible');
                }
            });
        });
    }
});

// Dentro del document.addEventListener('DOMContentLoaded', function() { ... });

    // =======================================================
    // ===== LÓGICA PARA EL CARRUSEL DE PODCASTS (NUEVO) =====
    // =======================================================
const podcastCarousel = document.querySelector('.podcast-carousel');
if (podcastCarousel) {
    const swiper = new Swiper('.podcast-carousel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,

        // ===== AÑADE ESTA LÍNEA PARA EL ESPACIADO =====
        spaceBetween: 400, // Espacio de 30px entre cada diapositiva
      
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

