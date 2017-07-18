var $exampleSlider = $('.example-list');

$exampleSlider.slick({
  centerMode: false,
  autoplay: true,
  centerPadding: '10px',
  slidesToShow: 3,
  nextArrow: $('#toRight'),
  prevArrow: $('#toLeft'),
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '100px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows:true, 
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#top .menu-wrapper").slideToggle();
});

