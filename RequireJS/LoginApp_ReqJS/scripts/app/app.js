define(['jquery'], function($) {
    
    $(document).ready(function(){
        $("#submitLogin").click(function(){
            if( $("#userName").val()=='admin' && $("#userPassword").val()=='password') {
                    window.location.href='html/welcome.html';
                }
            else {
                alert("Please try again");
            }
        });
    });
    
});