 	jQuery(document).ready(function(){
			function detect_active(){
	  			// get active
	  			var get_active = $("#dp-slider-2 .dp_item:first-child").data("class");
	  			$("#dp-dots-2 li").removeClass("active");
	  			$("#dp-dots-2 li[data-class="+ get_active +"]").addClass("active");
	  		}
	  		$("#dp-next").click(function(){
	  			var total = $(".dp_item").length;
	  			$("#dp-slider-2 .dp_item:first-child").hide().appendTo("#dp-slider-2").fadeIn();
	  			$.each($('.dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  			detect_active();

	  		});

	  		$("#dp-prev-2").click(function(){
	  			var total = $(".dp_item").length;
	  			$("#dp-slider-2 .dp_item:last-child").hide().prependTo("#dp-slider-2").fadeIn();
	  			$.each($('.dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});

	  		$("#dp-dots-2 li").click(function(){
	  			$("#dp-dots-2 li").removeClass("active");
	  			$(this).addClass("active");
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$("#dp-slider-2 .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider-2").fadeIn();
	  			$.each($('.dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  		});


	  		$("body").on("click", "#dp-slider-2 .dp_item:not(:first-child)", function(){
	  			var get_slide = $(this).attr('data-class');
	  			console.log(get_slide);
	  			$("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider-2").fadeIn();
	  			$.each($('.dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});

	  			detect_active();
	  		});

	  		const changeImage = ()=>{

	  			var total = $(".dp_item").length;
	  			$("#dp-slider-2 .dp_item:first-child").hide().appendTo("#dp-slider-2").fadeIn();
	  			$.each($('.dp_item'), function (index, dp_item) {
	  				$(dp_item).attr('data-position', index + 1);
	  			});
	  			detect_active();
	  		}
	  		setInterval(changeImage, 4000);
	  	});