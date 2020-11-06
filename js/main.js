$(function(){
  //главный слайдер
 $('.slider__inner').slick({
   nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
   prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
   infinite: false
 });
 //слайдер новостей
 $('.news__slider-inner').slick({
  nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false
});
//стиль форм - для селекта
 $('select').styler();
//бургер меню
 $('.header__btn-menu').on('click', function(){
  $('.menu ul').toggle('active');
 });
}); 