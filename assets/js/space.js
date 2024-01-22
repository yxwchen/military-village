$(document).ready(function () {
    $(".downBtn").click(function () {
        $(".essay-text-wrap").removeClass("active");
        $(".downBtn").css("display", "none");
        $(".upBtn").css("display", "inline-block");
    });
    $(".upBtn").click(function () {
        $(".essay-text-wrap").addClass("active");
        $(".upBtn").css("display", "none");
        $(".downBtn").css("display", "inline-block");
    });
});