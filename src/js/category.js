$(document).ready(function(){
	$(".category__star").on("click",function(event){
		event.preventDefault();
		$(this).css("color","#ffca00").addClass('.category__star--active').prevAll(".category__star").css("color","#ffca00");
		$(this).nextAll(".category__star").css("color","#f2f2f2");
		$(this).siblings().removeClass('.category__star--active');
	});
}); 