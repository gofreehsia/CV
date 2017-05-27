
//nav change
function checkScroll(){
  var startY = $('.nav').height()*2;
  
  if($(window).scrollTop()>startY){
    console.log(startY);
    $('.nav, a').addClass("scrolled")
  }else{
    $('.nav, a').removeClass('scrolled')
  }
}
if ($('.nav').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}
//nav onclick scroll
$('#nav-skill').on('click',function(){
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.skills-section').offset().top},'slow');  
})
$('#nav-home').on('click',function(){
  event.preventDefault();
  $('html,body').animate({scrollTop:0},'slow');  
})
$('#nav-cv').on('click',function(){
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.intro').offset().top-120},'slow');  
})
$('#nav-contact').on('click',function(){
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.footer').offset().top},'slow');  
})
$('#nav-icon').on('click',function(){
    event.preventDefault();
    if($('.nav').hasClass('responsive')){
        $('.nav').removeClass('responsive');
    }else{
        $('.nav').addClass('responsive');
    }
})



//bar animate start
function isElementInViewport(elem) {
    var $elem = $(elem);
    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top )+250;
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.chart-bar, .chart-title');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});