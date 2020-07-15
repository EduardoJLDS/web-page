$(document).ready(function() {
    var height = $(window).height();
    $('.bk').height(height);
});

$(document).ready(function() {
    $("#link-principal-1").click(function(event) {
        $("#pricipal_letter").load('mene.html');
    });
});
$(document).ready(function() {
    $("#link-principal-2").click(function(event) {
        $("#pricipal_letter").load('about-us.html');
    });
});
$(document).ready(function() {
    $("#link-principal-3").click(function(event) {
        $("#pricipal_letter").load('contact.html');
    });
});