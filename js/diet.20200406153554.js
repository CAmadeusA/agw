(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-49').attr('src', (dpi>1) ? ((dpi>2) ? 'images/warning-128-105.png' : 'images/warning-128-70.png') : 'images/warning-128-35.png');
$('.js-50').attr('src', 'images/car4-450.jpg');}else if($(window).width()>=960){$('.js-49').attr('src', (dpi>1) ? ((dpi>2) ? 'images/warning-128-84.png' : 'images/warning-128-56.png') : 'images/warning-128-28.png');
$('.js-50').attr('src', 'images/car4-360-1.jpg');}else{$('.js-49').attr('src', (dpi>1) ? ((dpi>2) ? 'images/warning-128-102.png' : 'images/warning-128-68.png') : 'images/warning-128-34.png');
$('.js-50').attr('src', (dpi>1) ? 'images/car4-576.jpg' : 'images/car4-288.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);

});