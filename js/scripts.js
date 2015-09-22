// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('#hideme').each( function(i){
            
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},5000);
//             }
//             else {  
//             	$(this).animate({'opacity':'1'},5000);  
//             }
            
//         }); 
    
//     });
    
// });

$(function () {
        
        divFade = $("#quote2");
        
        var toggleHeader = function (noAnimate) {
    
            var threshold  = 500,
                fadeLength = 200,
                opacity,
                scrollTop  = $(document).scrollTop();
            
            if (scrollTop < threshold) {
                opacity = 0;
            } else if (scrollTop > threshold + fadeLength) {
                opacity = 1;
            } else {
                if (noAnimate) {
                    opacity = 1;
                } else {
                    opacity = (scrollTop - threshold) / fadeLength;
                }
            }
            
            divFade.css("opacity", opacity);
            
        };
    
        toggleHeader(true);
        $(window).scroll(function () {toggleHeader();});
    
    });



// //quote1 fadeIN and fadeOUT on scroll

$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('#quote1').css({'opacity':(( 180-scroll )/400)+0.4});
       });

// $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//             $('#quote2').css({'opacity':(( 200-scroll )/1080)+0.4});
//         });

// test 


// left animation
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
