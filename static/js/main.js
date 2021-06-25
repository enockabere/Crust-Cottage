$(document).ready(function(){
    $("#cards").show(function(){
        $("#cards").animate({
            width: "100%",
            opacity: 1,
            left: "50px", 
            speed:"slow"
        }, 4000);
    });
});