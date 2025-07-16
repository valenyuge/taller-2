document.addEventListener('DOMContentLoaded', function() {

    const portadaContenido = document.querySelector('.portada-contenido');
    
    if (portadaContenido) {
        const breadcrumbNav = document.querySelector('.portada .navegacion-pasos');
        const stepTriggers = portadaContenido.querySelectorAll('[data-target]');
        
        // --- Lógica del Breadcrumb Dinámico ---
        let path = [{ target: '#step-1', title: 'Inicio' }];

        function updateBreadcrumbs() {
            breadcrumbNav.innerHTML = ''; 

            if (path.length <= 1) {
                breadcrumbNav.style.display = 'none';
                return;
            }

            breadcrumbNav.style.display = 'flex'; 

            path.forEach((step, index) => {
                if (index > 0) { 
                    const separator = document.createElement('span');
                    separator.textContent = '>';
                    breadcrumbNav.appendChild(separator);
                }

                if (index === path.length - 1) {
                    const currentStepEl = document.createElement('span');
                    currentStepEl.className = 'paso-actual';
                    currentStepEl.textContent = step.title;
                    breadcrumbNav.appendChild(currentStepEl);
                } else { 
                    const link = document.createElement('a');
                    link.href = '#';
                    link.dataset.target = step.target;
                    link.dataset.index = index; 
                    link.textContent = step.title;
                    
                    link.addEventListener('click', handleBreadcrumbClick);
                    breadcrumbNav.appendChild(link);
                }
            });
        }

        function handleStepChange(targetId, title) {
       
            path.push({ target: targetId, title: title });
    
            portadaContenido.querySelectorAll('.step-container').forEach(c => c.classList.remove('visible'));
            document.querySelector(targetId).classList.add('visible');

            updateBreadcrumbs();
        }

        function handleBreadcrumbClick(event) {
            event.preventDefault();
            const index = parseInt(this.dataset.index, 10);
            const targetId = this.dataset.target;

            path = path.slice(0, index + 1);

            portadaContenido.querySelectorAll('.step-container').forEach(c => c.classList.remove('visible'));
            document.querySelector(targetId).classList.add('visible');

            updateBreadcrumbs();
        }

        stepTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                handleStepChange(this.dataset.target, this.dataset.title);
            });
        });

        document.querySelector('#step-1').classList.add('visible');
        updateBreadcrumbs();
    }

    const podcastCarousel = document.querySelector('.podcast-carousel');
    if (podcastCarousel) {
        const swiper = new Swiper('.podcast-carousel', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 1400,
            spaceBetween: 400,
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
});