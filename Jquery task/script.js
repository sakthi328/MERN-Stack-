$(document).ready(function() {
    
    $("#welcome-btn").click(function() {
        $("#welcome-message").show();
    });

   
    $(".change-bg").focus(function() {
        $(this).css("background-color", "yellow");
    }).blur(function() {
        $(this).css("background-color", "");
    });

    
    $("#toggle-style-btn").click(function() {
        $("#toggle-style-btn").toggleClass("style1 style2");
    });

    $("#display-text-btn").click(function() {
        var text = $("#text-to-display").val();
        $(this).text(text);
    });
});
