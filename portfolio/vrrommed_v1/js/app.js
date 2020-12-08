$(document).ready(function(){
        $(".slide-one").owlCarousel({
        
        loop:true,
        margin: 10,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        responsive:{
            460:{
                items: 2
            },
            700:{
                items: 3
            },
            1260:{
                items: 4
            },
            2200:{
                items: 5
            },

        }
    });
        $(".slide-two").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
    });
});

