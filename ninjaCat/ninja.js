$(document).ready(function(){
    $('img').click(function(){
        var current = $(this).attr("src");
        var alternate = $(this).attr("alt-src");
        $(this).attr("src",alternate);
        $(this).attr("alt-src",current);
    });
});
