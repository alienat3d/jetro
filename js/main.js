$(document).ready(function(){
  $(".slider__inner").slick({
  });
});
$(".slider__inner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg"></button>',
  nextArrow:
    '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg"></button>',
});