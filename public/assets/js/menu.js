var menu = $('#navbar');

$('.menu-btn').click(function() {
    if (menu.hasClass('hide-sm')) {
        menu.removeClass('hide-sm');
    } else {
        menu.addClass('hide-sm');
    }
});