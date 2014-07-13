
// set background height according to screen size
$(function() {

  var footerHeight = 65;

  if (isMobile()) {
    footerHeight = 45;
  }

  var padd = $(window).height() - $('body').height() - footerHeight;
  $('#questionbox').css({'padding-bottom': padd + 'px'});
});

 // On document ready, initialize noUiSlider.
$(function(){

  var formatToolTipContent = function(value) {
    return '<span>' + Math.floor(value) + '</span>';
  }

  var createRangeToolTip = function() {
    return $.Link({
      target: '-tooltip-<div class="tooltip"></div>',
      method: function ( value ) {

        // The tooltip HTML is 'this', so additional
        // markup can be inserted here.
        $(this).html(formatToolTipContent(value));
      }
    });
  }

  var toolTipLowerBound = createRangeToolTip();
  var toolTipUpperBound = createRangeToolTip();

  $('#math-range-slider').noUiSlider({
    range: {
      'min': [ 0 ],
      'max': [ 100 ]
    },
    start: [ 3, 17 ],
    margin: 5,
    connect: true,
    step: 0,
    serialization: {
      lower: [ toolTipLowerBound ],
      upper: [ toolTipUpperBound ]
    }
  });


  if (!isMobile()) {
    $('#math-range-slider').change(function() {
      $('#question-answer').focus();
    });
  }

});