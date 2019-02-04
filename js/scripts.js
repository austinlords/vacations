$(function () {
  $(".show").click(function() {
    $(this).siblings(".initially-hidden").toggle();
    $(this).toggle();
  });

  $(".hide").click(function() {
    $(this).siblings(".initially-showing").toggle();
    $(this).toggle();
    $(this).siblings(".initially-hidden").toggle();
  });
});
