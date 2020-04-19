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

let toggle = false;
$('#button-3').click(() => {
    if(toggle === false) {
        $('#button-1').css('background-color', 'red');
        $('#button-2').css('background-color', 'blue');
        $('#button-3').css('background-color', 'green');
        toggle = true;
    } else {
        $('button').removeAttr('style');
        toggle = false;
    }
})