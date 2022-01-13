$(document).ready(function() {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(function () {
        var clock;
        var dates = new Array(
            new Date("January 19, 2022 00:00 UTC+3"),
            new Date("January 20, 2022 00:00 UTC+3"),
            new Date("January 21, 2022 00:00 UTC+3")
        );

        var currentDate = new Date();

        var sale1 = {
            name: $('#sale-1'),
            saleText: new Array('2 000р.')
        };
        var sale2 = {
            name: $('#sale-2'),
            saleText: new Array('2 000р.')
        };
        var sale3 = {
            name: $('#sale-3'),
            saleText: new Array('2 000р.')
        };

        var today1 = {
            name: $('#today-1'),
            todayText: new Array('18 000р.', '20 000р.')
        };
        var today2 = {
            name: $('#today-2'),
            todayText: new Array('30 000р.', '32 000р.')
        };
        var today3 = {
            name: $('#today-3'),
            todayText: new Array('42 000р.', '44 000р.')
        };

        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1297&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1298&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1301&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1302&clean=true&lg=ru')
        };
        var link3 = {
            name: $('#link-3'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1305&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1306&clean=true&lg=ru')
        };
        var prepLink = {
            name: $('#prepLink'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1309&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1310&clean=true&lg=ru')
        };

        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale1.name.text(sale1.saleText[0]);
                        sale2.name.text(sale2.saleText[0]);
                        sale3.name.text(sale3.saleText[0]);
                        today1.name.text(today1.todayText[0]);
                        today2.name.text(today2.todayText[0]);
                        today3.name.text(today3.todayText[0]);
                        link1.name.attr('href', link1.linkText[0]);
                        link2.name.attr('href', link2.linkText[0]);
                        link3.name.attr('href', link3.linkText[0]);
                        prepLink.name.attr('href', prepLink.linkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        link1.name.attr('href', link1.linkText[1]);
                        link2.name.attr('href', link2.linkText[1]);
                        link3.name.attr('href', link3.linkText[1]);
                        prepLink.name.attr('href', prepLink.linkText[1]);
                        $('.cost-sale, .cost-today, .timer').remove();
                        $('.cost-full span').addClass('unbroken');
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

            if (diff < 0) {
                diff = 0;
                $('.prepayment').remove();
            }

            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.prepayment').remove();
                    }
                }
            });
        }
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '0',
        // adaptiveHeight: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><span>‹</span></button>',
        nextArrow: '<button type="button" class="slick-next"><span>›</span></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

/*Конец документа*/
});