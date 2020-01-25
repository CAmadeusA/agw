(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-37').attr('src', 'images/car4-450.jpg');}else if($(window).width()>=960){$('.js-37').attr('src', 'images/car4-360-1.jpg');}else{$('.js-37').attr('src', (dpi>1) ? ((dpi>2) ? 'images/car4-360.jpg' : 'images/car4-240.jpg') : 'images/car4-120.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
$('form').h5Validate();setTimeout(function(){$('.js-38').prop('disabled',false);$("input[name='jvqqva']").attr('value', 'wpeyehtugordvsyn');},1000);

});