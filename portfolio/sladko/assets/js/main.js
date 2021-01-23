$(".btn-menu, .head-row li a").click(function(){
    $(".head-row").toggleClass("active");
});

$("body").on("click", ".btn-play", function(){
    if (!$(".block-head form input").val()){
        $(".block-head").addClass("error");
    }
});

$("body").on("submit", ".block-head form", function(e){
    e.preventDefault();
    $(".block-head").removeClass("error");
    $(".block-head").addClass("success");
});

$("body").on("click", ".block-head.success .btn-play", function(){
    $("body").addClass("noscroll");
    $(".modal-shadow").addClass("active");
    $(".modal-wrap-video").addClass("active");
});

$(".modal-wrap-video .btn-close").click(function(){
    $("body").removeClass("noscroll");
    $(".modal-shadow").removeClass("active");
    $(".modal-wrap-video").removeClass("active");
});

$("body").on("click", ".price-item .btn-program", function(){
    el = $(this).closest(".price-item");
    elOld = $(".price-item.active");
    elOld.addClass("rotate");
    el.addClass("rotate");
    setTimeout(function() {
       el.addClass("active");
       elOld.removeClass("active");
   }, 500);
    setTimeout(function() {
       el.removeClass("rotate");
       elOld.removeClass("rotate");
   }, 1000);
});

$("body").on("mouseleave", ".price-item.active", function(){
    el = $(this);
    el.addClass("rotate");
    setTimeout(function() {
       el.removeClass("active");
   }, 500);
    setTimeout(function() {
       el.removeClass("rotate");
   }, 1000);
});

$("body").on("click", ".btn-play-author", function(){
    $("body").addClass("noscroll");
    $(".modal-shadow").addClass("active");
    $(".modal-wrap-video-author").addClass("active");
});

$(".modal-wrap-video-author .btn-close").click(function(){
    $("body").removeClass("noscroll");
    $(".modal-shadow").removeClass("active");
    $(".modal-wrap-video-author").removeClass("active");
});

$('.slider-reviews').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true
});

$('.slider-instagram').slick({
  infinite: true,
  slidesToShow: 5,

  dots: false,
  arrows: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000
      }
    }
  ]
});

$(".block-faq-item").click(function(){
  $(".block-faq-item").removeClass("active");
  $(this).addClass("active");
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
        $(".btn-scroll").addClass("active");

    } else {
        $(".btn-scroll").removeClass("active");
    }
});

var $root = $('html, body');

    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            
        });

        return false;
    });

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}