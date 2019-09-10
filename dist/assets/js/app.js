document.addEventListener('touchstart', {passive: true});

$('.popup-trigger').hover(function(event) {
	$(this).children('.popup-content').toggleClass('d-none');
});

$('.flags').hover(function(event) {
	$(this).children('.popup-content').toggleClass('d-none');

});

$('.paginate-number').click(function(event) {
	$('.paginate-number').removeClass('paginate-active');
	$(this).addClass('paginate-active');

});


const loveAdd = ()=>{
	$(document).ready(function($) {
		$('.love').toggleClass('active');
	});
}

$('.active-trigger').click(function(event) {
	$(this).toggleClass('active');
});



const slideToggle = ()=>{
	$('.slide-content').slideToggle();

    // $([document.documentElement, document.body]).animate({
    //     scrollTop: $("#scroll-target").offset().top
    // }, 2000);
}

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});

 $(function() {
        $('.lazy').Lazy();
        placeholder : "data:image/assets/images/loader.svg"
    });

	 $(document).ready(function(){
		  $(".hamburger").click(function(){
		    $(this).toggleClass("is-active");
		    $(".navbar-dropdown").toggleClass('actived');
		  });
		});