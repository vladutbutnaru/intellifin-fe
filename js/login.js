var performLogin = function () {
    var email = $('#email').val();
    var password = $('#password').val();



    $.ajax({
        type: "POST",
        url: 'http://167.99.248.187:9393/rest/users/login',
        async: false,
        data: {
            "email": email,
            "password": password
        },
        success: function (response) {
            if (response.message == "OK"){
                setCookie("Token",response.token,1);
                location.href="index.html";
            }
            else
                alert("Date incorecte!");
        }
    })


};
