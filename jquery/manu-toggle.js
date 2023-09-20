$(document).ready(function () {
    // $("#open-nav").on('click',function () {
    //     $('#nav-closed').css('visibility','hidden');
    //     $('#nav-opened').css('visibility','visible');
    // })

    // $("#close-nav").on('click',function () {
    //     $('#nav-closed').css('visibility','visible');
    //     $('#nav-opened').css('visibility','hidden');
    // })

    $('#nav-closed').show();
    $('#nav-opened').hide();

    $("#open-nav").on('click',function () {
        $('#nav-closed').hide();
        $('#nav-opened').show(500);
    })

    $("#close-nav").on('click',function () {
        $('#nav-closed').show();
        $('#nav-opened').hide(500);
    })

    $(".nav-link").on('click',function () {
        $('#nav-closed').show();
        $('#nav-opened').hide(500);
    })
})