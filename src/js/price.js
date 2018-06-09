$(document).ready(function(){
    $(".price-tabs__content").first().show()

    $(".price-tabs--active").on("click", function(event){

      event.preventDefault()
      $(this).addClass("price-tabs--active")
      .removeClass("price-tabs__link")
      .removeClass("price-tabs__link")
      .siblings(".price-tabs--active").removeClass("price-tabs--active")
      .addClass("price-tabs__link")
      $($(this.hash)).show()
      .siblings(".price-tabs__content").hide();
    });

    $(".price-tabs__link").on("click", function(event){
      event.preventDefault()
      $(this).addClass("price-tabs--active")
      .removeClass("price-tabs__link")
      .siblings(".price-tabs--active").removeClass("price-tabs--active")
      .addClass("price-tabs__link")
    $($(this.hash)).show()
      .siblings(".price-tabs__content").hide();
    });
});