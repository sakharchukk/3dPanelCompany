$(document).ready(function(){
  $(".content").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("Everything was reviewed").addClass("noContent");
    }
  });
  
})

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});

$(document).ready(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.back_to_top').fadeIn();
} else {
$('.back_to_top').fadeOut();
  }
});
$('.back_to_top').click(function(){
$("html, body").animate({ scrollTop: 0}, 1000);
return false;
   });
});

