$(document).ready(function () {
    $(".downBtn").click(function () {
        $(".essayText-info").hide();
        $(".essay-text-wrap").css("height", "auto");
        $(".downBtn").css("display", "none");
        $(".upBtn").css("display", "inline-block");
    });
    $(".upBtn").click(function () {
        $(".essayText-info").show();
        $(".essay-text-wrap").css("height", "80%");
        $(".upBtn").css("display", "none");
        $(".downBtn").css("display", "inline-block");
    });
});