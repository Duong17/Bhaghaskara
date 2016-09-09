$(function () {
    //HEADER
    $('#secondMainIcons').hide();
    $('#scroller').on('click', function (event) {
        event.preventDefault();
        $('#scroll2').toggleClass('rotate');
        $('#secondMainIcons').slideToggle();
    });
    //SECOND SECTION
    //heart
    $('#heartIcon').on('mouseenter', function () {
        $('#first').attr('src', 'images/obramowanie.png');
        $('#heart').attr('src', 'images/fioletoweserce.png');
    });
    $('#heartIcon').on('mouseleave', function () {
        $('#first').attr('src', 'images/plaster2.png');
        $('#heart').attr('src', 'images/serce.png');
    });
    //diamont
    $('#diamontIcon').on('mouseenter', function () {
        $('#second').attr('src', 'images/obramowanie.png');
        $('#diamont').attr('src', 'images/fioletowydiament.svg');
    });
    $('#diamontIcon').on('mouseleave', function () {
        $('#second').attr('src', 'images/plaster2.png');
        $('#diamont').attr('src', 'images/normal.svg');
    });
    //coffee
    $('#coffeeIcon').on('mouseenter', function () {
        $('#third').attr('src', 'images/obramowanie.png');
        $('#coffee').attr('src', 'images/fioletowakawa.png');
    });
    $('#coffeeIcon').on('mouseleave', function () {
        $('#third').attr('src', 'images/plaster2.png');
        $('#coffee').attr('src', 'images/coffee.png');
    });
    //phone
    $('#phoneIcon').on('mouseenter', function () {
        $('#fourth').attr('src', 'images/obramowanie.png');
        $('#phone').attr('src', 'images/fioletowytelefon.png');
    });
    $('#phoneIcon').on('mouseleave', function () {
        $('#fourth').attr('src', 'images/plaster2.png');
        $('#phone').attr('src', 'images/phone.png');
    });
    //FIFTH SECTION
    var next = $('#next');
    var prev = $('#prev');
    var slider = $('.slides');
    var width = $(window).width();
    var maxClickPhone = 5;
    var maxClickTablet = 4;
    var maxClickLaptop = 3;
    var maxClick;
    var click = 0;

    function nextElement() {
        if (width <= 767) {
            maxClick = maxClickPhone;
            next.on('click', function () {
                console.log(click);
                if (click < maxClick) {
                    click = click + 1;
                    slider.animate({
                            'margin-left': '-=250px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        }
        else if (width > 767 && width <= 1023) {
            maxClick = maxClickTablet;
            next.on('click', function () {
                console.log(click);
                if (click < maxClick) {
                    click = click + 1;
                    slider.animate({
                            'margin-left': '-=350px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        }
        else {
            maxClick = maxClickLaptop;
            next.on('click', function () {
                console.log(click);
                if (click < maxClick) {
                    click = click + 1;
                    slider.animate({
                            'margin-left': '-=350px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        };
    };
    nextElement();

    function prevElement() {
        if (width <= 767) {
            maxClick = maxClickPhone;
            prev.on('click', function () {
                console.log(click);
                if (click > 0) {
                    click = click - 1;
                    slider.animate({
                            'margin-left': '+=250px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        }
        else if (width > 767 && width <= 1023) {
            maxClick = maxClickTablet;
            prev.on('click', function () {
                console.log(click);
                if (click > 0) {
                    click = click - 1;
                    slider.animate({
                            'margin-left': '+=350px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        }
        else {
            maxClick = maxClickLaptop;
            prev.on('click', function () {
                console.log(click);
                if (click > 0) {
                    click = click - 1;
                    slider.animate({
                            'margin-left': '+=350px'
                        }, 100);
                    console.log('Przesuwanie zakończone');
                }
                else {
                    slider.off('click');
                    console.log('Koniec przesuwania');
                }
            })
        };
    };
    prevElement();
    //SIXTH SECTION
    var position1 = $('#sixthSection').position().top;
    var position2 = $('#seventhSection').position().top;
    var numbers = false;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= position1 - 200 && $(document).scrollTop() <= position2) {
            if (numbers === false) {
                var growingDiv1 = $('#grow90');
                growingDiv1.animate({
                    width: '90%'
                }, 2000);
                var growingDiv2 = $('#grow70');
                growingDiv2.animate({
                    width: '70%'
                }, 2000);
                var growingDiv3 = $('#grow75');
                growingDiv3.animate({
                    width: '75%'
                }, 2000);
                var growingDiv4 = $('#grow85');
                growingDiv4.animate({
                    width: '85%'
                }, 2000);
                var growingNumber1 = $('#percent90');
                growingNumber1.animateNumber({
                    number: 90
                }, 2000);
                var growingNumber2 = $('#percent70');
                growingNumber2.animateNumber({
                    number: 70
                }, 2000);
                var growingNumber3 = $('#percent75');
                growingNumber3.animateNumber({
                    number: 75
                }, 2000);
                var growingNumber4 = $('#percent85');
                growingNumber4.animateNumber({
                    number: 85
                }, 2000);
                numbers = true;
            }
        };
        
    });
    //SEVENTH SECTION
    //EIGHTH SECTION
    var position3 = $('#seventhSection').position().top;
    var position4 = $('#ninthSection').position().top;
    var count = false;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= position3 - 200 && $(document).scrollTop() <= position4) {
            if (count === false) {
                var growingIpsum1 = $('#ipsum365');
                growingIpsum1.animateNumber({
                    number: 365
                }, 2000);
                var growingIpsum2 = $('#percent98');
                growingIpsum2.animateNumber({
                    number: 98
                }, 2000);
                var growingIpsum3 = $('#ipsum69');
                growingIpsum3.animateNumber({
                    number: 69
                }, 2000);
                var growingIpsum4 = $('#ipsum1');
                growingIpsum4.animateNumber({
                    number: 1
                }, 2000);
                var growingIpsum5 = $('#ipsum2');
                growingIpsum5.animateNumber({
                    number: 642
                }, 2000);
                count = true;
            }
        };
        
    });
    //NINTH SECTION
    $('.bxslider').bxSlider({
        nextSelector: '#slider-next'
        , prevSelector: '#slider-prev'
        , nextText: 'Onward →'
        , prevText: '← Go back'
        , captions: false
        , pager: true
        , mode: 'fade'
        , auto: true
        , autoControls: false
        , pause: 3000
    , });
    //TENTH SECTION
    $('#allButton').addClass('colorViolet');
    $('#allButton').on('click', function () {
        $('#gallery1').show();
        $('#gallery2').show();
        $('#gallery3').show();
        $('#gallery4').show();
        $('#gallery5').show();
        $('#gallery6').show();
        $('.fourButtons').removeClass('colorViolet');
        $('#allButton').addClass('colorViolet');
    });
    $('#webButton').on('click', function () {
        $('#gallery3').show();
        $('#gallery6').show();
        $('#gallery1').hide();
        $('#gallery2').hide();
        $('#gallery4').hide();
        $('#gallery5').hide();
        $('#photosFirstPart').css('justify-content', 'space-around');
        $('.fourButtons').removeClass('colorViolet');
        $('#webButton').addClass('colorViolet');
    });
    $('#appsButton').on('click', function () {
        console.log('Działa!');
        $('#gallery4').show();
        $('#gallery5').show();
        $('#gallery1').hide();
        $('#gallery2').hide();
        $('#gallery3').hide();
        $('#gallery6').hide();
        $('#photosFirstPart').css('justify-content', 'space-around');
        $('.fourButtons').removeClass('colorViolet');
        $('#appsButton').addClass('colorViolet');
    });
    $('#iconsButton').on('click', function () {
        console.log('Drugi');
        $('#gallery1').show();
        $('#gallery2').show();
        $('#gallery3').hide();
        $('#gallery4').hide();
        $('#gallery5').hide();
        $('#gallery6').hide();
        $('#photosFirstPart').css('justify-content', 'space-around');
        $('.fourButtons').removeClass('colorViolet');
        $('#iconsButton').addClass('colorViolet');
    });
});