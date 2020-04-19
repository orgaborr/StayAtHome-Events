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

let changed = false;
$('#button-3').click(() => {
    if(!changed) {
        let color = $('#inputField').val();
        $('button').css('background-color', color); 
        changed = true;
    }
})