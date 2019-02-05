$(function () {

  $(".show").click(function() {
    $(this).siblings(".initially-hidden").slideToggle();
    $(this).toggle();
  });

  $(".hide").click(function() {
    $(this).siblings(".initially-showing").toggle();
    $(this).toggle();
    $(this).siblings(".initially-hidden").slideToggle();
  });

  $("#green").click(function () {
    $("body").removeClass("yellow-background red-background");
    $("body").addClass("green-background");
  });

  $("#yellow").click(function () {
    $("body").removeClass("green-background red-background");
    $("body").addClass("yellow-background");
  });

  $("#red").click(function () {
    $("body").removeClass("green-background yellow-background");
    $("body").addClass("red-background");
  });

  $("#white").click(function () {
    $("body").removeClass("yellow-background red-background green-background");
  })


});
