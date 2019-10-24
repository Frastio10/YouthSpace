
$('.previewer:first-child').addClass('active');

$(".previewer").click(function(event) {
	//$('.preview-thumbnail').fadeOut();

	
	let data = $(this).children('img').attr('src');

	$('.previewer').removeClass('active');

	$(this).addClass('active');



	$('.preview-thumbnail').css('background-image', "url("+data+")");
	$('.preiew-thumbnail').fadeIn();
});