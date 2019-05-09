var performLogin = function () {
    var email = $('#email').val();
    var password = $('#password').val();



    $.ajax({
        type: "POST",
        url: serverUri + '/rest/users/login',
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

var performLoginMock = function(){
    location.href="index.html";


};