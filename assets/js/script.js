$(function() {
    $("header").load("header.html"); 
    $("nav").load("nav.html"); 
});

$("nav a").click(function( e ) {
    e.preventDefault();
    var href = $( this ).attr('href');
    $("#content").load( href +" #content");
});
