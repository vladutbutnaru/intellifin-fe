var populateCities = function () {
    $.get("http://167.99.248.187:9393/rest/cities/list", {}, function (response) {
        for (var i = 0; i < response.length; i++) {
            $("#city-input").append(new Option(response[i].name, response[i].id));
        }

    });



};

populateCities();


var submitRegistration = function () {
    var user = {
        "email": "",
        "password": "",
        "smoker": false,
        "driverLicense": false,
        "ownsCar": false,
        "married": false,
        "numberOfKids": 0,
        "ownsApartment": false,
        "rentApartment": false,
        "city": 0,
        "address": "",
        "subscriptionType": 1,
        "age": 0,
        "gender": 0,
        "phoneNumber": "",
        "birthDate": 1185937200000

    };


    if ($("#email-input").val() == "" || $('#password-input').val() == "" || $('#city-input').val() == "" || $('#phone-input').val() == "") {
        $('#modalerror').modal("toggle");
        return;
    }
    user.email = $('#email-input').val();
    user.password = $('#password-input').val();
    user.city = $('#city-input').val();
    user.phoneNumber = $('#phone-input').val();



    $.ajax({
        type: "POST",
        //the url where you want to sent the userName and password to
        url: 'http://167.99.248.187:9393/rest/users/register',
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        //json object to sent to the authentication url
        data: JSON.stringify(user),
        success: function (response) {
            if (response.message == "OK")
                location.href = "page-signin2.html";
            else
               $('#modalerror').modal("toggle");
        }
    });



};
