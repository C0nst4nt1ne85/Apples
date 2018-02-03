$(document).ready(function(){
    
    if ($(window).scrollTop() === 0) {
        $("body").css("overflow", "hidden");
    }

    $(".button").on("mouseenter", function(){
        $("#second-arrow").slideDown(700);
    });

    $(".button").on("mouseleave", function () {
        $("#second-arrow").slideUp(700);
    });

    $(".button").on("click", function (event) {
        $("body").css("overflow", "auto");
        firstPage();
        $("#second-title").css("visibility", "hidden");
        var title = setInterval(function () {
            $("#second-title").css("visibility", "visible").hide().fadeIn(700);
            clearInterval(title);
        }, 2205);
    });

    $(".buy_now").on("mouseover", function () {
        $(".buy_now").addClass("on");
    });

    $(".buy_now").on("mouseleave", function () {
        $(".buy_now").removeClass("on");
    });

    $(".buy_now").on("click", function (event) {
        $("body").css("overflow", "auto");
        $(".buy").find("h1").hide().fadeIn(800);
        $(".buy").find("p").hide().fadeIn(1300);
    });

    $(window).on("scroll", function(event){
        var whyOffset = $("#why").offset().top;
        var buyOffset = $("#end").offset().top;
        if ($(window).scrollTop() >= whyOffset){
            firstPage();
        }
        if ($(window).scrollTop() >= buyOffset -50) {
            $(".buy_now").fadeOut();
        } else {
            $(".buy_now").fadeIn();
        }
    });

    $(".buy span").on("click", function () {
        $("#snake").css('visibility', 'visible').hide().fadeIn(2000);
    });
});

function firstPage() {
    $(".button").slideUp(1000);
    $("header").slideUp(3000);
}