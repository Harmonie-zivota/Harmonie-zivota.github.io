$(document).ready(function() {

    $("#submit").click(function(e) {
        e.preventDefault();

        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();

        $.ajax({
            type: "POST",
            url: 'https://ihbrpautqf.execute-api.eu-west-1.amazonaws.com/prod/sender',
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify({
                'name': name,
                'email': email,
                'message': message
            }),
            success: function(res){
                $('#form-response').text('Vaše zpráva byla úspěšně odeslána, děkuji! Ozvu se co nejdříve nazpátek.');
            },
            error: function(){
                $('#form-response').text('Bohužel, došlo k nějaké chybě, zpráva nebyla odeslána. Omlouvám se.');
            }
        });

    })

});
