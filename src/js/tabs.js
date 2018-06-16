$(document).ready(function(){
  $(".tab_content").eq(1).show()
  $(".tabs li").on("click", function(){
    $(this).addClass("active")
      .siblings().removeClass("active")
      var activeId = $(this).attr("rel")
      var activePanel = $("#"+activeId);
      var othersPanel = activePanel.siblings();
      othersPanel.hide();
      activePanel.addClass("d_active").fadeIn().siblings().removeClass("d_active");
    });
  $(".tab-delete").on("click", function(){
    $(".tabs").find('.active').removeClass("active").hide().next(".tabs li").addClass("active").fadeIn();
    $(".d_active").removeClass("d_active").hide().next(".tab_content").addClass("d_active").fadeIn();
  });
  $(".tab-add").on("click", function(){
    $(".tabs li").parent().append('<li>New tab</li>');
    $(".tabs li").attr('rel',function(index, currentClassName){
      if (!currentClassName) { 
      return 'tab'+(index+1);
      }    
    });
    var newId=$(".tabs li").last().attr("rel")
    var newPanel = (newId)
    $(".tab_container").append('<div class="tab_content">New tab content</div>')
    $(".tab_content").last().attr('id',newPanel);
    $(".tabs li").last().on("click", function(){
      $(this).addClass("active")
        .siblings().removeClass("active")
        var activeId = $(this).attr("rel")
        var activePanel = $("#"+activeId);
        var othersPanel = activePanel.siblings();
        othersPanel.hide();
        activePanel.addClass("d_active").fadeIn().siblings().removeClass("d_active");
    });
  });
});