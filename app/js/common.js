$(function() {

//Standat-seize//

  $(window).on("resize", function () {       
   if( 
         $(window).width()<= 1366
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","100%");    
           $("body").css("-ms-zoom","100%");
       }   
    }
}).resize();

//1280-size//

  $(window).on("resize", function () {       
   if( 
         $(window).width()<= 1280
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","95%");    
           $("body").css("-ms-zoom","95%");
       }   
    }
}).resize(); 

//1240-size//

$(window).on("resize", function () {       
   if( 
         $(window).width()<= 1240
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","90%");    
           $("body").css("-ms-zoom","90%");
       }   
    }
}).resize(); 

//1200-size//

$(window).on("resize", function () {       
   if( 
         $(window).width()<= 1200
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","85%");    
           $("body").css("-ms-zoom","85%");
       }   
    }
}).resize();

//1160-size//

$(window).on("resize", function () {       
   if( 
         $(window).width()<= 1160
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","80%");    
           $("body").css("-ms-zoom","80%");
       }   
    }
}).resize();

//1120-size//

$(window).on("resize", function () {       
   if( 
         $(window).width()<= 1000
   ){
       /*IF IE9*/
       if (!('querySelector' in document)  //скорее всего ie 9+
          || !('localStorage' in window)  //ie 8+
          || !('addEventListener' in window)  //ie 8 + (возможно)
          || !('matchMedia' in window)) {//ie 10+
          //действия которые должны сработать для IE.

       }
       else {
           $("body").css("zoom","75%");    
           $("body").css("-ms-zoom","75%");
       }   
    }
}).resize(); 

//Orbit AuthoSlider on header-main-section-Start//

    $('#featured').orbit({
         animation: 'horizontal-slide',             // вид анимации: fade, horizontal-slide, vertical-slide, horizontal-push
         animationSpeed: 800,                      // скорость анимации в мс
         timer: true,                             // показывать таймер: true или false
         advanceSpeed: 4000,                     // если таймер включен, то указывается время между переходами в мс 
         pauseOnHover: false,                   // пауза слайдера при наведении курсора
         startClockOnMouseOut: true,           // запускать часы при выводе курсора из области слайдера
         startClockOnMouseOutAfter: 3000,     // через какое время после вывода курсора из области слайдера таймер запустится
         directionalNav: true,               // ручная навигация
         captions: true,                    // использовать заголовки?
         captionAnimation: 'fade',         // анимация для заголовков: fade, slideOpen, none
         captionAnimationSpeed: 800,
         bullets: true,
         bulletThumbs: true,
    
         afterSlideChange: function(){}      // пустая функция
});

//Orbit AuthoSlider on header-main-section-Stop//

	//slider-carousel-Start//

	$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    nav:true,
    navText:"",
    dotsEach:2,
    dots:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//slider-carousel-Stop//

//placeholder-focus//
	 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

//pod-menu-pop-up-menu-Start//

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: true,
		focus: '.mfp-close-btn-in',
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

//pod-menu-pop-up-menu-Stop//

//slider-next-prev-Start//

var owl = $(".main-section-services");

	$(".next").click(function(){
		owl.trigger('next.owl.carousel')
		})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel')
		});
//slider-next-prev-Stop//

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//actived-teg[a]-in-top-menu-when-open-pod-menu-Start//

$(function() {
    $("#selectBackground ul li a").click(function() {
        $("#selectBackground ul li a").removeClass("actived");
        $(this).toggleClass("actived");
    })
});
//actived-teg[a]-in-top-menu-when-open-pod-menu-Stop//

//actived-.fa-in-top-menu-when-open-pod-menu//

$(function() {
    $("#selectBackground ul li a").click(function() {
    		$("#selectBackground ul li a").removeClass("none");
        $(this).toggleClass("none");
    })
});

//scroll-move-animation-section-foot//

window.addEventListener('scroll', function(e) {

            if( $(window).scrollTop() <= 450) {
                $('.wow').removeClass('animated');
                $('.wow').removeAttr('style');
                new WOW().init();
            }
});

