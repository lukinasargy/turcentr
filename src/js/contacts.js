$(document).ready(function() {

 $(".contacts__link").on("click", function(event) {
    event.preventDefault();
    $(".contacts__countries").show();
    $(".manager").hide();    
    $( $(this.hash) ).show();
  });

  $(".manager__close").on("click",function(){
        $(this).closest(".contacts__countries").hide();
      });
    
    $(".contacts__countries").on("click",function(event){
      if($(event.target).hasClass("contacts__countries")){
         $(this).closest(".contacts__countries").hide();
      }
    });
  // function closeModal() {
  //   $(this).closest(".contacts__countries").hide();
  // }
});