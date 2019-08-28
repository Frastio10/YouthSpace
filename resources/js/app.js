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