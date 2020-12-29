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

 
        $(".product__item-rate-ct-star").rateYo({
          rating: 4.5,
          eadOnly: true,
          starWidth: "15px",
          readOnly: true
        });

        var mixer = mixitup('.plugins__inner');

});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}