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
	
}