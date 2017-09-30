console.log('hello there');
$('.slider').slick({});

$('.slide img').css('visibility', '0');
var slider = $('.slider');
var sliderImg = $('.slider img');

sliderImg.each(function() {
    var imgSrc = $(this).attr('src');
    console.log(imgSrc);
    $(this).parent().css('backgroundColor', 'red');
    $(this).parent().css('backgroundImage', 'url(' + imgSrc + ')');
});
