$(function(){
      $('.product-slider__inner').slick({
        prevArrow: ('.prev-arrow'),
        nextArrow: ('.next-arrow'),
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

      });

      $('.second__product-slider-inner').slick({
        prevArrow: ('.prev-arrow-2'),
        nextArrow: ('.next-arrow-2'),
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // variableWidth: true

      });

      $(".js-range-slider").ionRangeSlider({
        type: "double", 
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$",
        max_postfix: "+",
        prettify_enabled: true,
    
        
    });

 
      $(".product__item-rate-ct-star").rateYo({
          rating: 4.5,
          eadOnly: true,
          starWidth: "14px",
          readOnly: true
      });

      $('.new__products-focus').on('click', function(){
        $('.new__products-focus').addClass('active');
        $('.popular__products-focus').removeClass('active');
      });

      $('.popular__products-focus').on('click', function(){
        $('.popular__products-focus').addClass('active');
        $('.new__products-focus').removeClass('active');
      });



      $('.list').on('click', function(){
        $('.plugins__item-list').addClass('active');
        $('.plugins__item-default').removeClass('active');
        $('.list').addClass('active');
        $('.layers').removeClass('active');
      });

      $('.layers').on('click', function(){
        $('.plugins__item-default').addClass('active');
        $('.plugins__item-list').removeClass('active');
        $('.layers').addClass('active');
        $('.list').removeClass('active');
      });

      $('.js-tab-trigger').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');
        
        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');
        
        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
     });

        var mixer = mixitup('.plugins__inner');

});