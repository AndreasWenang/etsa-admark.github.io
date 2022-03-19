$('#navhome').addClass("active");

$("#navhome").click(function() {
    $('html, body').animate({
        scrollTop:        $("#home").offset().top-66
    }, 1000);
 return false;
});

$("#navabout").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#about").offset().top-1
    }, 1000);
 return false;
});

$("#navproducts").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#products").offset().top-70
    }, 1000);
 return false;
});

$("#navpreview").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#preview").offset().top-15
    }, 1000);
 return false;
});

$(".aplikasikamibutton").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#preview").offset().top-15
    }, 1000);
 return false;
});

