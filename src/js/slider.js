$(document).ready(function(){
	$('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: true,
	      }
	    }
	  ]
	});

	$('.slider-review').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  infinite: true,
	  dotsClass:'review-dots',
	  // .addClass('.review-dots'),
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	slidesToShow: 2,
	  		slidesToScroll: 1,
	      }
	    }
	  ]
	  // $('.slick-dots').addClass('review-dots');
	});
});