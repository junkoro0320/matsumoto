$('slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settinngs: {
                slideToShow: 2,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesTOshow: 1.5,
            }
        }]

});