console.log('hello there');
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'ease'
});

$('.slide img').css('visibility', '0');
var slider = $('.slider');
var sliderImg = $('.slider img');

sliderImg.each(function() {
    var imgSrc = $(this).attr('src');
    console.log(imgSrc);
    $(this).parent().css('backgroundColor', 'red');
    $(this).parent().css('backgroundImage', 'url(' + imgSrc + ')');
});
