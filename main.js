$(window).on("scroll", function () {
    if (window.scrollY > window.outerHeight) {
      $("#futurebtm").addClass("active");
      setTimeout(function() {
        var theta = ($(window).scrollTop() - (window.outerHeight + (window.outerHeight/2))) / 500;
        $('#futurebtm').css({ transform: 'rotate(' + theta + 'rad)' });
      })
    } else {
      $("#futurebtm").removeClass("active");
    }
  });
  
  $('#futurebtm').on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 300000000);
  })