$(document).ready(function () {
    $('.slider--frame').slick({
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
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            }
        ]
    });
});
