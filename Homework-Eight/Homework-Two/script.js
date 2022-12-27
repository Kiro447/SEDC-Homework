let textInput = $("#userText")
let colorInput = $("#userColor")
const newHeader = $('#message');
$('#btn').click(function () {
    let text = textInput.val();
    let color = colorInput.val();
    const header = $('<h1>').text(text).css('color', color);
    // header;
    $('body').append(header);

})