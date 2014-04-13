$(function () {
    var center = Math.floor($(window).height() / 2),
        ipad_top = $('#ipad').offset().top,
        degrees = 90,
        bounds = {
            top: center - degrees,
            center: center,
            bottom: center + degrees
        };

    $(window).scroll(function (event) {
        var pos = ipad_top - $(window).scrollTop();
        if (pos < bounds.bottom && pos > bounds.top) {
            if (pos > bounds.center) {
                $('img.back').css('transform', 'rotateX(90deg)');
                $('img.front').css('transform', 'rotateX(' + (bounds.bottom - pos) + 'deg)');
            } else {
                $('img.front').css('transform', 'rotateX(90deg)');
                $('img.back').css('transform', 'rotateX(' + (pos - bounds.top) + 'deg)');
            }
        } else if (pos > bounds.bottom) {
            $('img.front').css('transform', 'rotateX(0deg)');
            $('img.back').css('transform', 'rotateX(90deg)');
        } else {
            $('img.front').css('transform', 'rotateX(90deg)');
            $('img.back').css('transform', 'rotateX(0deg)');
        }
    });
});