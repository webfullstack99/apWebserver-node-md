/*Author: Phạm Trung Nguyên*/
/*Date: 03/09/2015*/
/*Email: ngin2401@gmail.com*/

console.log("customlog");
$(document).ready(function () {
  
    $("#home-slideshow").hover(function () {
        $("#home-slideshow .carousel-control").fadeIn(300);
    }, function () { $("#home-slideshow .carousel-control").fadeOut(300); }
    );
    $("#spmenu").navgoco({ accordion: true });
    $("#arrow4").click(function () {
        $('html, body').animate({
            scrollTop: $(".title_whoare").offset().top
        }, 500);
    });
    new WOW().init();

    var wow = new WOW(
  {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
    wow.init();
    console.log("document ready!");
    $(".fancybox").fancybox();
    console.log("document loaded");
});