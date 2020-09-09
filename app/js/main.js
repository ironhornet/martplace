$(function(){
      $('.product-slider__inner').slick({
        prevArrow: ('.prev-arrow'),
        nextArrow: ('.next-arrow'),
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

      });

 
        $(".product__item-rate-ct-star").rateYo({
          rating: 4.5,
          eadOnly: true,
          starWidth: "15px",
          readOnly: true
        });
       
      

});