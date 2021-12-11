const swiper = new Swiper('.bestcurses__slider .swiper', {

    //
    loop: true,

    // скорость перключения - влияет на плавность
    speed: 900,

    // If we need pagination
    pagination: {
        el: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.bestcurses__slider-next',
        prevEl: '.bestcurses__slider-prev',
    },

    // вкл/выкл перетаскивания на пк
    simulateTouch: true,

    // чувствительность перетаскивания 
    touchRadio: 1,

    // угол срабатывания перетаскивания - понятно
    touchAngle: 45,

    // курсор перетаскивания - понятно
    grabCursor: true,

    // автовысота - слайдер подстроится под высоту каждого слайда
    autoHeight: true,

    // количество слайдов для показа

    // отступы между слайдами
    spaceBetween: 8,

    // количство листаемых слайдов
    slidesPerGroup: 1,


    // стартовый слайд - подсчет от нуля
    initialSlide: 1,

    // Автопрокрутка
    // autoplay: {
    //     // пауза между прокруткой
    //     delay: 2000,
    //     // закончить на последнем слайде - работает если выключено бесконечность
    //     stopOnLastSlide: false,
    //     // отключает автопрокрутку после ручного переключения
    //     disableOnInteraction: false, // true и через некоторое время после ручного вмещастельства автопрокрутка возобновится
    // },

    // oтключение и запуск autoplay при наведении на слайдер
    // on: {
    //     init() {
    //         this.el.addEventListener('mouseenter', () => {
    //             this.autoplay.stop();
    //         });

    //         this.el.addEventListener('mouseleave', () => {
    //             this.autoplay.start();
    //         });
    //     }
    // },

    // адаптив 
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        505: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});


const swiper2 = new Swiper('.freecurses__slider .swiper', {

    //
    loop: true,

    // скорость перключения - влияет на плавность
    speed: 900,

    // If we need pagination
    pagination: {
        el: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.freecurses__slider-next',
        prevEl: '.freecurses__slider-prev',
    },

    // вкл/выкл перетаскивания на пк
    simulateTouch: true,

    // чувствительность перетаскивания 
    touchRadio: 1,

    // угол срабатывания перетаскивания - понятно
    touchAngle: 45,

    // курсор перетаскивания - понятно
    grabCursor: true,

    // автовысота - слайдер подстроится под высоту каждого слайда
    autoHeight: true,

    // отступы между слайдами
    spaceBetween: 9,

    // количство листаемых слайдов
    slidesPerGroup: 1,


    // стартовый слайд - подсчет от нуля
    initialSlide: 1,

    // Автопрокрутка
    // autoplay: {
    //     // пауза между прокруткой
    //     delay: 2000,
    //     // закончить на последнем слайде - работает если выключено бесконечность
    //     stopOnLastSlide: false,
    //     // отключает автопрокрутку после ручного переключения
    //     disableOnInteraction: false, // true и через некоторое время после ручного вмещастельства автопрокрутка возобновится
    // },

    // oтключение и запуск autoplay при наведении на слайдер
    // on: {
    //     init() {
    //         this.el.addEventListener('mouseenter', () => {
    //             this.autoplay.stop();
    //         });

    //         this.el.addEventListener('mouseleave', () => {
    //             this.autoplay.start();
    //         });
    //     }
    // },

    // адаптив 
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        505: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});


const swiper3 = new Swiper('.authors__slider .swiper', {

    //
    loop: true,

    // скорость перключения - влияет на плавность
    speed: 900,

    // If we need pagination
    pagination: {
        el: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.authors__slider-next',
        prevEl: '.authors__slider-prev',
    },

    // вкл/выкл перетаскивания на пк
    simulateTouch: true,

    // чувствительность перетаскивания 
    touchRadio: 1,

    // угол срабатывания перетаскивания - понятно
    touchAngle: 45,

    // курсор перетаскивания - понятно
    grabCursor: true,

    // автовысота - слайдер подстроится под высоту каждого слайда
    autoHeight: true,

    // отступы между слайдами
    spaceBetween: 8,

    // количство листаемых слайдов
    slidesPerGroup: 1,


    // стартовый слайд - подсчет от нуля
    initialSlide: 1,

    // Автопрокрутка
    // autoplay: {
    //     // пауза между прокруткой
    //     delay: 2000,
    //     // закончить на последнем слайде - работает если выключено бесконечность
    //     stopOnLastSlide: false,
    //     // отключает автопрокрутку после ручного переключения
    //     disableOnInteraction: false, // true и через некоторое время после ручного вмещастельства автопрокрутка возобновится
    // },

    // oтключение и запуск autoplay при наведении на слайдер
    // on: {
    //     init() {
    //         this.el.addEventListener('mouseenter', () => {
    //             this.autoplay.stop();
    //         });

    //         this.el.addEventListener('mouseleave', () => {
    //             this.autoplay.start();
    //         });
    //     }
    // },

    // адаптив 
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
        505: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 8,
        },
    },
});

let k = 0;

document.querySelector('.header-manu__burger').addEventListener('click', function () {
    document.querySelector('.header-manu').classList.toggle("_active");
    document.querySelector('.main-content__title').classList.toggle("_moved");
    document.querySelector('.main-content__text').classList.toggle("_moved");
    document.querySelector('.main-content__dots').classList.toggle("_moved");
    document.querySelector('.header .grid-content').classList.toggle("_moved");



    if (k % 2 == 0) {
        this.classList.add('_active');
        setTimeout(() => {
            this.classList.add('_active-rotate');
        }, 500);
        k++;
    }
    else {
        setTimeout(() => {
            this.classList.remove('_active');
        }, 300);
        this.classList.remove('_active-rotate');
        k++;
    }
});


let header_location = document.querySelector('.header__location');

if (header_location) {
    document.querySelector('.header__location-close').addEventListener('click', function (e) {
        e.preventDefault();
        header_location.style.display = 'none';
    });
} 

