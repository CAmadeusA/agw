(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="disjtujboAbsdivmfub.hsffo.xfeejoh/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5523-1440.jpg' : 'images/th5_5523-960.jpg') : 'images/th5_5523-480.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5369-720.jpg' : 'images/th5_5369-480.jpg') : 'images/th5_5369-240.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5409-720.jpg' : 'images/th5_5409-480.jpg') : 'images/th5_5409-240.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5251-1440.jpg' : 'images/th5_5251-960.jpg') : 'images/th5_5251-480.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5340-1440.jpg' : 'images/th5_5340-960.jpg') : 'images/th5_5340-480.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5595-720.jpg' : 'images/th5_5595-480.jpg') : 'images/th5_5595-240.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5593-711.jpg' : 'images/th5_5593-474.jpg') : 'images/th5_5593-237.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5386-1440.jpg' : 'images/th5_5386-960.jpg') : 'images/th5_5386-480.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, 'images/thelaurelpano-copy-424.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? 'images/gh-background-3-848.jpeg' : 'images/gh-background-3-424.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? 'images/chapel-3-848.jpg' : 'images/chapel-3-424.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-228.png' : 'images/email-152.png') : 'images/email-76.png');}else{$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5523-366.jpg' : 'images/th5_5523-244.jpg') : 'images/th5_5523-122.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5369-186.jpg' : 'images/th5_5369-124.jpg') : 'images/th5_5369-62.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5409-183.jpg' : 'images/th5_5409-122.jpg') : 'images/th5_5409-61.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5251-369.jpg' : 'images/th5_5251-246.jpg') : 'images/th5_5251-123.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5340-366.jpg' : 'images/th5_5340-244.jpg') : 'images/th5_5340-122.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5595-183.jpg' : 'images/th5_5595-122.jpg') : 'images/th5_5595-61.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5593-183.jpg' : 'images/th5_5593-122.jpg') : 'images/th5_5593-61.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/th5_5386-369.jpg' : 'images/th5_5386-246.jpg') : 'images/th5_5386-123.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, (dpi>1) ? 'images/thelaurelpano-copy-284.jpeg' : 'images/thelaurelpano-copy-142.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/gh-background-3-426.jpeg' : 'images/gh-background-3-284.jpeg') : 'images/gh-background-3-142.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/chapel-3-426.jpg' : 'images/chapel-3-284.jpg') : 'images/chapel-3-142.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-78.png' : 'images/email-52.png') : 'images/email-26.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-21').mouseenter(function() { $.loadImages('images/thelaurelpano-copy-800.jpeg', function() { }) });
$('.js-21').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-21-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/thelaurelpano-copy-800.jpeg'; } } });
$('.js-22').mouseenter(function() { $.loadImages('images/gh-background-3-800.jpeg', function() { }) });
$('.js-22').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-22-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/gh-background-3-800.jpeg'; } } });
$('.js-23').mouseenter(function() { $.loadImages('images/chapel-3-800.jpg', function() { }) });
$('.js-23').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-23-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/chapel-3-800.jpg'; } } });
$('.js-9 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 1800});
});