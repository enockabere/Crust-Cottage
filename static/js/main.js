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
//scroll top
var scrollbut = document.getElementById("myBtn"); //get button to scroll up

//when user scrolls down up to 20px show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction (){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollbut.style.display = "block";
    }else {
        scrollbut.style.display = "none";
    }
}

//when user clicks on the button it scrolls to top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}