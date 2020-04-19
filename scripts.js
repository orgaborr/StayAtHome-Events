$('#button-1').click(() => {
    console.log('Yeah, you clicked me');
})

$('#button-2').on('click', () => {
    if($('#button-1').text() === 'Button One') {
        $('#button-1').text('Button text changed!');
    } else {
        $('#button-1').text('Button One');
    }
    
});

$('#button-3').click(() => {
    let color = $('#inputField').val();
    $('button').css('background-color', color);  
})