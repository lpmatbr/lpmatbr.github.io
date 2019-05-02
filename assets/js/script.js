$(function() {
    $("header").load("include/header.html"); 
    $("nav").load("include/nav.html"); 
});

$(document).ready(function() {
    $("nav a").click(function( e ) {
        e.preventDefault();
        var href = $( this ).attr('href');
        $("#content").load( href +" #content");
    });
});
