$(document).ready(function(){
        $(".slide-one").owlCarousel({
        center: true,
        loop:true,
        autoplay:false, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{
            1:{
                items: 2,
                margin: 20,
            },
            430:{
                items: 3,
                margin: 50,
            },
            760:{
                items: 4,
                margin: 50,
            }
        }
    });
        $(".slide-two").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:10000, //Время смены слайда
    });
});

