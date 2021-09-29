$(document).ready(function () {
    $('#plus_1').click(function () {
        $('.footer-section__text-1').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('#plus_1').html('rotate');
            } else {
                $('#plus_1').html('rotate');
            }
        });
        return false;
    });
});

$(document).ready(function () {
    $('#plus_2').click(function () {
        $('.footer-section__text-2').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('#plus_2').html('rotate');
            } else {
                $('#plus_2').html('rotate');
            }
        });
        return false;
    });
});

$(document).ready(function () {
    $('#plus_3').click(function () {
        $('.footer-section__text-3').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('#plus_3').html('rotate');
            } else {
                $('#plus_3').html('rotate');
            }
        });
        return false;
    });
});