(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="disjtujboAbsdivmfub.hsffo.xfeejoh/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5523-1800.jpg' : 'images/th5_5523-1200.jpg') : 'images/th5_5523-600.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5369-900.jpg' : 'images/th5_5369-600.jpg') : 'images/th5_5369-300.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5409-900.jpg' : 'images/th5_5409-600.jpg') : 'images/th5_5409-300.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5251-1800.jpg' : 'images/th5_5251-1200.jpg') : 'images/th5_5251-600.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5340-1800.jpg' : 'images/th5_5340-1200.jpg') : 'images/th5_5340-600.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5595-900.jpg' : 'images/th5_5595-600.jpg') : 'images/th5_5595-300.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5593-888.jpg' : 'images/th5_5593-592.jpg') : 'images/th5_5593-296.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5386-1800.jpg' : 'images/th5_5386-1200.jpg') : 'images/th5_5386-600.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, 'images/thelaurelpano-copy-530.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, 'images/gh-background-3-530.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, 'images/chapel-3-530.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-282.png' : 'images/email-188.png') : 'images/email-94.png');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5523-1440-1.jpg' : 'images/th5_5523-960-1.jpg') : 'images/th5_5523-480-1.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5369-720-1.jpg' : 'images/th5_5369-480-1.jpg') : 'images/th5_5369-240-1.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5409-720-1.jpg' : 'images/th5_5409-480-1.jpg') : 'images/th5_5409-240-1.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5251-1440-1.jpg' : 'images/th5_5251-960-1.jpg') : 'images/th5_5251-480-1.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5340-1440-1.jpg' : 'images/th5_5340-960-1.jpg') : 'images/th5_5340-480-1.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5595-720-1.jpg' : 'images/th5_5595-480-1.jpg') : 'images/th5_5595-240-1.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5593-711-1.jpg' : 'images/th5_5593-474-1.jpg') : 'images/th5_5593-237-1.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5386-1440-1.jpg' : 'images/th5_5386-960-1.jpg') : 'images/th5_5386-480-1.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, 'images/thelaurelpano-copy-424-1.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? 'images/gh-background-3-848-1.jpeg' : 'images/gh-background-3-424-1.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? 'images/chapel-3-848-1.jpg' : 'images/chapel-3-424-1.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-228-1.png' : 'images/email-152-1.png') : 'images/email-76-1.png');}else{$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5523-366-1.jpg' : 'images/th5_5523-244-1.jpg') : 'images/th5_5523-122-1.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5369-186-1.jpg' : 'images/th5_5369-124-1.jpg') : 'images/th5_5369-62-1.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5409-183-1.jpg' : 'images/th5_5409-122-1.jpg') : 'images/th5_5409-61-1.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5251-369-1.jpg' : 'images/th5_5251-246-1.jpg') : 'images/th5_5251-123-1.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5340-366-1.jpg' : 'images/th5_5340-244-1.jpg') : 'images/th5_5340-122-1.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5595-183-1.jpg' : 'images/th5_5595-122-1.jpg') : 'images/th5_5595-61-1.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5593-183-1.jpg' : 'images/th5_5593-122-1.jpg') : 'images/th5_5593-61-1.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5386-369-1.jpg' : 'images/th5_5386-246-1.jpg') : 'images/th5_5386-123-1.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, (dpi>1) ? 'images/thelaurelpano-copy-284-1.jpeg' : 'images/thelaurelpano-copy-142-1.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/gh-background-3-426-1.jpeg' : 'images/gh-background-3-284-1.jpeg') : 'images/gh-background-3-142-1.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/chapel-3-426-1.jpg' : 'images/chapel-3-284-1.jpg') : 'images/chapel-3-142-1.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-78-1.png' : 'images/email-52-1.png') : 'images/email-26-1.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-31').mouseenter(function() { $.loadImages('images/thelaurelpano-copy-800-1.jpeg', function() { }) });
$('.js-31').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-31-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/thelaurelpano-copy-800-1.jpeg'; } } });
$('.js-32').mouseenter(function() { $.loadImages('images/gh-background-3-800-1.jpeg', function() { }) });
$('.js-32').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-32-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/gh-background-3-800-1.jpeg'; } } });
$('.js-33').mouseenter(function() { $.loadImages('images/chapel-3-800-1.jpg', function() { }) });
$('.js-33').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-33-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/chapel-3-800-1.jpg'; } } });
$('.js-9 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 1800});
});