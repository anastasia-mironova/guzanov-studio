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
  function rotateEye(leftEyeSelector, rightEyeSelector) {
    let x, y;
    const leftEye = document.querySelector(leftEyeSelector);
    x = event.x - leftEye.getBoundingClientRect().left;
    y = event.y - leftEye.getBoundingClientRect().top;
    leftEye.style.transform = `rotate(${57.2958 * arcctg(x, y)}deg)`;
    const rightEye = document.querySelector(rightEyeSelector);
    x = event.x - rightEye.getBoundingClientRect().left;
    y = event.y - rightEye.getBoundingClientRect().top;
    rightEye.style.transform = `rotate(${57.2958 *
      arcctg(x - rightEye.getBoundingClientRect().width / 2, y)}deg)`;
  }

  rotateEye(".left-eye", ".right-eye");

  rotateEye(".feedback__left-eye", ".feedback__right-eye");

  rotateEye(".contact__left-eye", ".contact__right-eye");
  function arcctg(x, y) {
    if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
    if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
    if (x > 0 && y < 0) return (3 * Math.PI) / 2 + Math.abs(Math.atan(x / y));
  }
};
$(function() {
  document.getElementById("ajax-contact-form").addEventListener(
    "submit",
    function(evt) {
      var http = new XMLHttpRequest(),
        f = this;
      var th = $(this);
      evt.preventDefault();
      http.open("POST", "send.php", true);
      http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
          if (http.responseText.indexOf(f.nameFF.value) == 0) {
            // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
            th.trigger("reset");
          }
        }
      };
      http.onerror = function() {
        alert("Ошибка, попробуйте еще раз");
      };
      http.send(new FormData(f));
    },
    false
  );
});
const mobileMenuPageHandler = display => {
  const mobileMenuPage = document.querySelector(".header__mobile-navbar-page");
  mobileMenuPage.classList.toggle("active");
  const mobileNavbar = document.querySelector(".mobile");
  mobileNavbar.style.display = display;
};
document
  .querySelector(".header__mobile-navbar_wrapper")
  .addEventListener("click", () => mobileMenuPageHandler("none"));

document
  .querySelector(".mobile-navbar__close-btn")
  .addEventListener("click", () => {
    mobileMenuPageHandler("flex");
  });
const mobileLinkMenu = document.getElementsByClassName("mobile-link");

Array.from(mobileLinkMenu).map(link => {
  link.addEventListener("click", () => {
    mobileMenuPageHandler("flex");
  });
});
document.body.addEventListener("resize", () => {
  if (document.documentElement.clientWidth() > 1100) {
    const mobileNavbar = document.querySelector(".mobile");
    mobileNavbar.style.display = "none";
  }
});
