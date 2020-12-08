var Timer = null;
var prev_slide = 1;



var TimerSlide = 0;

var peopleSwiper = new Swiper('.swiper-container-people', {
    pagination: '.pagination-people',
    paginationClickable: true,
    slidesPerView: 2,
    	speed:2000 ,
    	autoplay:4000 ,
    	loop : true ,
    	simulateTouch : true ,
    spaceBetween: 10,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
$('.swiper-container-people').hover(
	function() {
		peopleSwiper.stopAutoplay()
	} ,
	function() {
		peopleSwiper.startAutoplay();
	}
);


