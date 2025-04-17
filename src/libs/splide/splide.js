import Splide from '@splidejs/splide';

export function initSplideSlider() {
    const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        fixedWidth: '60.6rem',
        focus: 'center',
        gap: '50px'
    }).mount();

    function updateSplideType() {

        if (window.innerWidth <= 400) {
            splide.options.type = 'loop';
            splide.options.fixedWidth = '270px';
            splide.options.focus = 'center';
            splide.options.gap = '100px';
        }

        else if (window.innerWidth <= 481) {
            splide.options.type = 'loop';
            splide.options.fixedWidth = '300px';
            splide.options.focus = 'center';
            splide.options.gap = '100px';
        }

        else if (window.innerWidth <= 768) {
            splide.options.type = 'loop';
            splide.options.fixedWidth = '390px';
            splide.options.focus = 'center';
            splide.options.gap = '50px';

        }

        else if (window.innerWidth <= 1000) {
            splide.options.type = 'loop';
            splide.options.fixedWidth = '400px';
            splide.options.focus = 'center';
            splide.options.gap = '50px';
        }

        else {
            splide.options.type = 'loop';
            splide.options.fixedWidth = '606px';
            splide.options.focus = 'center';
            splide.options.gap = '50px';
        }
        
        splide.refresh(); // Обновление слайдера после изменения опций
    }

    function handleWindowResize() {
        updateSplideType();
    }

    window.addEventListener('resize', function () {
        requestAnimationFrame(handleWindowResize);
    });

    updateSplideType();
}