(function($){
    "use strict";
 // circle-progressbar

  $('#uiux-progress').circleProgress({
    value: 0.73,
    size: 180,
    thickness: 8,
    fill: '#6028d9',
    startAngle: -1.5,
    emptyFill: '#20205f'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.percentage').html(Math.round(73 * progress) + '<i>%</i>');
  });

  $('#dev-progress').circleProgress({
    value: 0.85,
    size: 180,
    thickness: 8,
    fill: '#1573ff',
    startAngle: -1.5,
    emptyFill: '#20205f'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.percentage').html(Math.round(85 * progress) + '<i>%</i>');
  });

  $('#pr-progress').circleProgress({
    value: 0.48,
    size: 180,
    thickness: 8,
    fill: '#16ffdb',
    startAngle: -1.5,
    emptyFill: '#20205f'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.percentage').html(Math.round(48 * progress) + '<i>%</i>');
  });


  $('#product-progress').circleProgress({
    value: 0.75,
    size: 180,
    thickness: 8,
    fill: '#baff26',
    startAngle: -1.5,
    emptyFill: '#20205f'
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.percentage').html(Math.round(69 * progress) + '<i>%</i>');
  });


})(jQuery);


  
