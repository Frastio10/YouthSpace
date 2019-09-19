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

$('.nicescroll').niceScroll();
 
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

const scrollBottom = (e)=>{
    var element = document.getElementById(e);
    element.scrollTop = element.scrollHeight;
}

 $(function() {
        $('.lazy').Lazy();
        placeholder : "data:image/assets/images/loader.svg"
    });

 $(document).ready(function(){
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$(".navbar-dropdown").toggleClass('actived');
		$(".backdrop").toggleClass('active');
	});

	$(".backdrop").click(function(){
		$(".hamburger").toggleClass("is-active");

		$(".navbar-dropdown").removeClass('actived');
		$(this).removeClass('active');

	})
});
// $('#vid-1').click(function(e){
//   $('.popup-area').addClass('activex');
//   var data = $(this).data('url');
//   $('.vids-1').attr('src',data);
// });

// $(".stay-bottom").animate({ scrollTop: $(this).height() }, "slow");
//   return false;

 $('.img-hover').click(function(event) {
 	let source  = $(this).closest('.box-3').children('.img-data').attr('src');
 	$('.image-modalview-backdrop').addClass('active');
 	$('#image-modal').attr('src', source);
 	//console.log(source);
 	//alert(source);
 });

 $('.image-modalview-backdrop').click(function(event) {
 	$('.image-modalview-backdrop').removeClass('active');
 });

 $('.close-popup').click(function(event) {
 	$('.image-modalview-backdrop').removeClass('active');
 });

$('.image-modalview').click(function(event) {
	event.stopPropagation();
});

	$(".active-target").toggleClass('active');

const upImage = (()=>{
    $(":file").change(function () {
		if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = loadImage;
            reader.readAsDataURL(this.files[0]);
        }

		// setTimeout(function(){
		// 	fetchData();
		// }, 1000)

    });
})();

const loadImage = (e)=>{
    $('#img_target').attr('src', e.target.result);
};
