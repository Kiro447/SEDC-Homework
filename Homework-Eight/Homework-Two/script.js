let textInput = $("#userText")
let colorInput = $("#userColor")

const newHeader = $('#message');
$('#btn').click(function () {
    let text = textInput.val();
    console.log(text);
    let color = colorInput.val();
    if (!text) {
        $("#error").html('<span>Please fill-out all fields</span>')
    } else {
        $("#error").remove()
        const header = $('<h1>').text(text).css('color', color);
        $('body').append(header);
    }

})