$(function() {
    //色を変える
    $('#change-color').on('click',function() {
        $('#target').css('color','red');
    });

    //テキストを変える
    $('#change-text').on('click', function() {
        $('#target').text('hello');
    });

    //fedeout
    $('#fade-out').on('click',function() {
        $('#target').fadeOut();
    });

    //fadein
    $('#fade-in').on('click',function() {
        $('#target').fadeIn();
    })
});