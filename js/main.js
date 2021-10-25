$(function() {
    let header = $('.header_wrap');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 500) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });  
  //  фиксированное меню при скролле 



// Бургер меню
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// Бургер меню




// слайдер о компании
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// слайдер о компании



// слайдер отзывов slick
$(function() {
    $('.rev_slik').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: 1,
        variableWidth: true,
    });
    
})
// слайдер отзывов slick