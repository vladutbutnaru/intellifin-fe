var performLogin = function () {
    var email = $('#email').val();
    var password = $('#password').val();



    $.ajax({
        type: "POST",
        url: 'http://localhost:9393/rest/users/login',
        async: false,
        data: {
            "email": email,
            "password": password
        },
        success: function (response) {
            if (response.message == "OK"){
                setCookie("Token",response.token,1);
                location.href="index3.html";
            }
            else
                alert("Date incorecte!");
        }
    })


};
