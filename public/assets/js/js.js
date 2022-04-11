$(document).on('click', '.default_option', function() {
    if ($(this).parent().hasClass('active') || $('.select_wrap').hasClass('active')) {
        $('.select_wrap').removeClass('active');
    } else {
        $(this).parent().toggleClass('active');
    }    
})

$(document).on('click', '.select_ul li', function() {
    var currentElem = $(this).html();
    $(this).parents('.select_wrap').find('.default_option li').html(currentElem);
    $(this).parents('.select_wrap').removeClass('active');
})

$(document).mouseup( function(e){
    var user = $('.header__user');
    var notify = $('.header__notifications');

    if ( !user.is(e.target) && user.has(e.target).length === 0 ) {
        user.removeClass('header__user-show');
    } else if ( user.has(e.target).length === 0 ) {
        user.toggleClass('header__user-show');
    }

    if ( !notify.is(e.target) && notify.has(e.target).length === 0 ) {
        notify.removeClass('header__notifications-show');
    } else if ( notify.has(e.target).length === 0 ) {
        notify.toggleClass('header__notifications-show');
    }
});

$('#date-on').on('click', function () {
    if ( $(this).is(':checked') ) {
        $('.calendar').prop('disabled', false);
    } else {
        $('.calendar').prop('disabled', true);
    }
})

$('table thead #check-all').on('click', function () {
    if ($(this).is(':checked')){
        $('table tbody input[type=checkbox]').prop('checked', true);
        checkList();
    } else {
        $('table tbody input[type=checkbox]').prop('checked', false);
        checkList();
    }
})
function checkList() {
    const activeBtn = [];
    $('tbody input[type="checkbox"]').each(function(){
        if ($(this).is(':checked')){
            activeBtn.push($(this).val());
        }
    });

    if (activeBtn.length > 0){
        $('.workflow__sing').removeClass('button_ico_sing').addClass('button_ico_sing-white').addClass('button_type_green');
        $('.workflow__sing').prop('disabled', false);
    } else {
        $('.workflow__sing').addClass('button_ico_sing').removeClass('button_ico_sing-white').removeClass('button_type_green');
        $('.workflow__sing').prop('disabled', true);
    }
}

$(document).on('change', 'tbody input[type="checkbox"]', function () {
    checkList();
})

$(document).on('click', '#addRowButton', function() {
    var table = $('#add'),
        lastRow = table.find('tbody tr:last'),
        lastNumber = $('#add tbody tr').length + 1,
        rowClone = lastRow.clone();

    table.find('tbody').append(rowClone);

    table.find('tbody tr:last td:first').html(lastNumber);
});
$(document).on('click', '.remove-row', function() {
    if ($('#add tbody tr').length > 1) {
        $(this).parents('.tr_clone').remove();
    }
});


$('body').on('click', '.password-control', function(){
    if ($('#password').attr('type') == 'password'){
        $('#password').attr('type', 'text').addClass('input__ico-password-view');
    } else {
        $('#password').attr('type', 'password').removeClass('input__ico-password-view');
    }
    return false;
});

$('.cheage-data-select .option').click(function() {
  let dataSelect = $(this).data('select');
  let test = $(this).parentsUntil('.change');

  $('.change-data').hide();
  $('.change-data-' + dataSelect).show();
});