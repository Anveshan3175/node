define(['jquery','cube','square'], function($,cube) {
    
    $(document).ready(function(){
        $("#calcCube").click(function(){
            $("#cubeNumber").val(cube($("#cnumber").val()));
        });


        $("#calcSquare").click(function(){
            $("#sqNumber").val(square($("#snumber").val()));
        });
    });
    
});