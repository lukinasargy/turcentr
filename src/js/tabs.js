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
  $(".tab-delete").on("click", function(){
    $(".tabs").find('.active').removeClass("active").hide().next(".tabs li").addClass("active").fadeIn();
    $(".d_active").removeClass("d_active").hide().next(".tab_content").addClass("d_active").fadeIn();
  });
});