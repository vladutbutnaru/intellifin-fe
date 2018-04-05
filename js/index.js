var loadNotifications = function(){
      $.ajax({
            type: "GET",
            url: serverUri + '/rest/notifications/list',
            async: false,
            headers: {
                "Authentication": getCookie("Token")
            },
            success: function (response) {
                var notificationsHtml = "";
                console.log(response);
                
                for(var i = 0; i < response.length; i++){
                    
                    notificationsHtml+=' <a href="'+response[i].link+'" class="dropdown-link"> <div class="media"> <img src="../img/'+response[i].icon+'" alt=""> <div class="media-body"> <p>'+response[i].text+'</p> <span>'+response[i].createdAt+'</span> </div> </div><!-- media --> </a>';
                    
                    
                }
                $('#notifications-container').html(notificationsHtml);
                
            }
        });
    
    
};

var loadUserData = function(response){
    //topbar user email
    $("#user-email").text(response.email);
    //welcome text
    $(".slim-pagetitle").text("Bine ai revenit!");
    
    //notifications
    loadNotifications();
    
    
    
};

var verifyToken = function () {

    if (getCookie("Token") != null && getCookie("Token") != "") {
        $.ajax({
            type: "GET",
            url: serverUri + '/rest/users/info',
            async: false,
            headers: {
                "Authentication": getCookie("Token")
            },
            success: function (response) {
                loadUserData(response);
                
            },
            error: function(){
                   location.href = "page-signin2.html";
                
            }
        });

    } else
        location.href = "page-signin2.html";



};

verifyToken();

