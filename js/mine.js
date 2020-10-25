$(".nav-link").click(function(){
var targetHref = $(this).attr("href");
var scroTop = $(targetHref).offset().top;
$("html,body").animate({scrollTop : scroTop},1000)

})
/*var targetHref = $(this).attr("href");
var scroTop = $(targetHref).offset().top;
$(" html , bodty").animate({scrollTop : scroTop} , 1000)
*/