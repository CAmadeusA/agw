(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="disjtujboAbsdivmfub.hsffo.xfeejoh/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/4-960.jpg' : 'images/4-480-1.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/03-720.jpg' : 'images/03-480.jpg') : 'images/03-240-1.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/10-720.jpg' : 'images/10-480.jpg') : 'images/10-240-1.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/01-1440.jpg' : 'images/01-960.jpg') : 'images/01-480-1.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/13-1440.jpg' : 'images/13-960.jpg') : 'images/13-480-1.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/09-720.jpg' : 'images/09-480.jpg') : 'images/09-240-1.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/05-711.jpg' : 'images/05-474.jpg') : 'images/05-237.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/02-960.jpg' : 'images/02-480-1.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, 'images/thelaurelpano-copy-424-1.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? 'images/gh-background-3-848.jpeg' : 'images/gh-background-3-424-1.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? 'images/chapel-3-848.jpg' : 'images/chapel-3-424-1.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-228.png' : 'images/email-152.png') : 'images/email-76.png');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/4-1152.jpg' : 'images/4-768.jpg') : 'images/4-384.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/03-576.jpg' : 'images/03-384.jpg') : 'images/03-192.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/10-576.jpg' : 'images/10-384.jpg') : 'images/10-192.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/01-1152.jpg' : 'images/01-768.jpg') : 'images/01-384.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/13-1152.jpg' : 'images/13-768.jpg') : 'images/13-384.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/09-576.jpg' : 'images/09-384.jpg') : 'images/09-192.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/05-570.jpg' : 'images/05-380.jpg') : 'images/05-190.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/02-1152.jpg' : 'images/02-768.jpg') : 'images/02-384.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, 'images/thelaurelpano-copy-340.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? 'images/gh-background-3-680.jpeg' : 'images/gh-background-3-340.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? 'images/chapel-3-680.jpg' : 'images/chapel-3-340.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-183.png' : 'images/email-122.png') : 'images/email-61.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/4-720.jpg' : 'images/4-480.jpg') : 'images/4-240.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/03-360.jpg' : 'images/03-240.jpg') : 'images/03-120.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/10-360.jpg' : 'images/10-240.jpg') : 'images/10-120.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/01-720.jpg' : 'images/01-480.jpg') : 'images/01-240.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/13-720.jpg' : 'images/13-480.jpg') : 'images/13-240.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/09-360.jpg' : 'images/09-240.jpg') : 'images/09-120.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/05-357.jpg' : 'images/05-238.jpg') : 'images/05-119.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/02-720.jpg' : 'images/02-480.jpg') : 'images/02-240.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, (dpi>1) ? 'images/thelaurelpano-copy-424.jpeg' : 'images/thelaurelpano-copy-212.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/gh-background-3-636.jpeg' : 'images/gh-background-3-424.jpeg') : 'images/gh-background-3-212.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/chapel-3-636.jpg' : 'images/chapel-3-424.jpg') : 'images/chapel-3-212.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-117.png' : 'images/email-78-1.png') : 'images/email-39.png');}else{$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/4-366.jpg' : 'images/4-244.jpg') : 'images/4-122.jpg');
$('.js-2').attr('src', (dpi>1) ? ((dpi>2) ? 'images/03-186.jpg' : 'images/03-124.jpg') : 'images/03-62.jpg');
$('.js-3').attr('src', (dpi>1) ? ((dpi>2) ? 'images/10-183.jpg' : 'images/10-122.jpg') : 'images/10-61.jpg');
$('.js-4').attr('src', (dpi>1) ? ((dpi>2) ? 'images/01-369.jpg' : 'images/01-246.jpg') : 'images/01-123.jpg');
$('.js-5').attr('src', (dpi>1) ? ((dpi>2) ? 'images/13-366.jpg' : 'images/13-244.jpg') : 'images/13-122.jpg');
$('.js-6').attr('src', (dpi>1) ? ((dpi>2) ? 'images/09-174.jpg' : 'images/09-116.jpg') : 'images/09-58.jpg');
$('.js-7').attr('src', (dpi>1) ? ((dpi>2) ? 'images/05-183.jpg' : 'images/05-122.jpg') : 'images/05-61.jpg');
$('.js-8').attr('src', (dpi>1) ? ((dpi>2) ? 'images/02-369.jpg' : 'images/02-246.jpg') : 'images/02-123.jpg');
var a='data-src'; if($('.js-9 .slide0').hasAttr('src')) { a='src'; } $('.js-9 .slide0').attr(a, (dpi>1) ? 'images/thelaurelpano-copy-284.jpeg' : 'images/thelaurelpano-copy-142.jpeg');
var a='data-src'; if($('.js-9 .slide1').hasAttr('src')) { a='src'; } $('.js-9 .slide1').attr(a, (dpi>1) ? ((dpi>2) ? 'images/gh-background-3-426.jpeg' : 'images/gh-background-3-284.jpeg') : 'images/gh-background-3-142.jpeg');
var a='data-src'; if($('.js-9 .slide2').hasAttr('src')) { a='src'; } $('.js-9 .slide2').attr(a, (dpi>1) ? ((dpi>2) ? 'images/chapel-3-426.jpg' : 'images/chapel-3-284.jpg') : 'images/chapel-3-142.jpg');
$('.js-10').attr('src', (dpi>1) ? ((dpi>2) ? 'images/email-78.png' : 'images/email-52.png') : 'images/email-26.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-41').mouseenter(function() { $.loadImages('images/thelaurelpano-copy-800.jpeg', function() { }) });
$('.js-41').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-41-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/thelaurelpano-copy-800.jpeg'; } } });
$('.js-42').mouseenter(function() { $.loadImages('images/gh-background-3-800.jpeg', function() { }) });
$('.js-42').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-42-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/gh-background-3-800.jpeg'; } } });
$('.js-43').mouseenter(function() { $.loadImages('images/chapel-3-800.jpg', function() { }) });
$('.js-43').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-43-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/chapel-3-800.jpg'; } } });
$('.js-9 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 1050,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 1800});
});