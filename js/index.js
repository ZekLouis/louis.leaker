$(function(){
  $("#terminal").draggable();

  $(".close").click(function(){
    $("#terminal").hide();
  });

  $(".minimize").click(function(){
    $("#terminal").hide();
    $(".dock").show();
  });

  $(".app.terminal").click(function(){
    $("#terminal").show();
    $(".dock").hide();
  });

  var terminal = new Terminal("#terminal");





  var height = window.innerHeight;

  var getMax = function(){
    return $(document).height() - $(window).height();
  }

  var getValue = function(){
    return $(window).scrollTop();
  }

  if('max' in document.createElement('progress')){
    // Browser supports progress element
    var progressBar = $('progress');

    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
        // On scroll only Value attr needs to be calculated
        progressBar.attr({ value: getValue() });
    });

    $(window).resize(function(){
        // On resize, both Max/Value attr needs to be calculated
        progressBar.attr({ max: getMax(), value: getValue() });
    });
  }
  else {
    var progressBar = $('.progress-bar'),
        max = getMax(),
        value, width;

    var getWidth = function(){
        // Calculate width in percentage
        value = getValue();
        width = (value/max) * 100;
        width = width + '%';
        return width;
    }

    var setWidth = function(){
        progressBar.css({ width: getWidth() });
    }

    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
        // Need to reset the Max attr
        max = getMax();
        setWidth();
    });

  }

  $(window).scroll(function () {
      if ($(window).scrollTop() > height) {
          if(!$('.topbar').hasClass('fixed')){
            $('.topbar').hide()

          }
          $('.topbar').addClass('fixed');
          $('.topbar').slideDown();
      }
      if ($(window).scrollTop() < height+1) {
        $('.topbar').removeClass('fixed');
      }
  });

});
