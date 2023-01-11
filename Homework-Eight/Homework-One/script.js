let btn = $("#btn")
btn.click(function(e){
    let text = $("#text").val();
    insert = $("#btn").after("<h1>" + text +"</h1>")
})

