jQuery(document).ready(function($) {

    $('.our-services .all-cards').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fi fi-rr-angle-small-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fi fi-rr-angle-small-right"></i></button>',
        draggable: true,

        responsive: [

             {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

}); // document ready close
