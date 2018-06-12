$(document).ready(function(){
  $(".tab_content").eq(1).show()
  $(".tabs li").on("click", function(){
  $(this).addClass("active")
    .siblings().removeClass("active")
    var activeId = $(this).attr("rel")
    var activePanel = $("#"+activeId);
    var othersPanel = activePanel.siblings();
    othersPanel.hide();
    activePanel.addClass("d_active").fadeIn();
});
});