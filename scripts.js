$(document).ready(function(){
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
    
    console.log('hello there');
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500
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
});

let navCtrl = $('.nav-control');
let mobileNav = $('.mobile-nav');

navCtrl.on('click', function() {
    mobileNav.toggleClass('active');
});
