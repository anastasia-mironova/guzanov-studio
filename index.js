$(document).ready(function() {
  let $menu = $(".header");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
      $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("default");
    }
  }); //scroll
});

$(".preview__cat-logo").mousemove(function(e) {
  let x = e.pageX + 12;
});

document.onmousemove = function(event) {
  let x = event.x - 50;
  let y = event.y - 50;
  document.querySelector(".left-eye").style.transform = `rotate(${57.2958 *
    arcctg(x, y)}deg)`;
  document.querySelector(".right-eye").style.transform = `rotate(${57.2958 *
    arcctg(x - 19, y)}deg)`;
  document.querySelector(
    ".feedback__left-eye"
  ).style.transform = `rotate(${57.2958 * arcctg(x, y)}deg)`;
  document.querySelector(
    ".feedback__right-eye"
  ).style.transform = `rotate(${57.2958 * arcctg(x - 19, y)}deg)`;
  x -= 700;
  y -= 300;

  let pos = document
    .querySelector(".contact__left-eye")
    .getBoundingClientRect();
  console.log(pos);
  console.log(y);
  document.querySelector(
    ".contact__left-eye"
  ).style.transform = `rotate(${57.2958 * arcctg(x, y)}deg)`;
  document.querySelector(
    ".contact__right-eye"
  ).style.transform = `rotate(${57.2958 * arcctg(x - 19, y)}deg)`;

  function arcctg(x, y) {
    if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
    if (x > 0 && y < 0) return (3 * Math.PI) / 2 + Math.abs(Math.atan(x / y));
  }
};
