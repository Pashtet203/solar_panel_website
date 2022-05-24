$(function () {
    $(".greenRate__slider").slick({
        dots: false,
        infinite: true,
        arrows: false,
    });
    $('.slider-dots .slider-dots__item').on("click", function () {
        var $this = $(this);
        $('.greenRate__slider').slick('slickGoTo', $this.data('index'))
    })
    $(".clients__slider-inner").slick({
        prevArrow: '.leftbtn',
        nextArrow: '.rightbtn'
    });
})