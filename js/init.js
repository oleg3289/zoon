jQuery(document).ready(function($) {

    $(window).load(function() {

      $("#status").fadeOut("slow"); 

      $("#preloader").delay(500).fadeOut("slow").remove();      

    }) 

    var toggle_button = $("<a>", {                         
                        id: "toggle-btn", 
                        html : "Menu",
                        title: "Menu",
                        href : "#" } 
                        );
    var nav_wrap = $('nav#nav-wrap')
    var nav = $("ul#nav");  


    nav_wrap.find('a.menu-btn').remove(); 
    nav_wrap.prepend(toggle_button); 

    toggle_button.on("click", function(e) {
    e.preventDefault();
      nav.slideToggle("fast");     
    });

    if (toggle_button.is(':visible')) nav.addClass('mobile');
    $(window).resize(function(){
    if (toggle_button.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('ul#nav li a').on("click", function(){      
    if (nav.hasClass('mobile')) nav.fadeOut('fast');      
    });



  $("#intro").backstretch("images/header-background.jpg");


  var pxShow = 300; 
  var fadeInTime = 400; 
  var fadeOutTime = 400;
  var scrollSpeed = 300;

  jQuery(window).scroll(function() {

    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery("#go-top").fadeIn(fadeInTime);
    } else {
      jQuery("#go-top").fadeOut(fadeOutTime);
    }

  });


  $('input, textarea').placeholder()


   setTimeout( function() {

     $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
     
   }, 100);

  var finalDate = '2018/07/29';

  $('div#counter').countdown(finalDate)
    .on('update.countdown', function(event) {

      $(this).html(event.strftime('<span>%D <em>days</em></span>' + 
                         '<span>%H <em>hours</em></span>' + 
                         '<span>%M <em>minutes</em></span>' +
                         '<span>%S <em>seconds</em></span>'));

   });  


   $('.smoothscroll').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
          window.location.hash = target;
      });
  });


  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({

      handler: function(event, direction) {

       var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");

    },
    offset: '35%'

  });



   $('#intro, #map').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('#intro, #map').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })

        $("#intro").backstretch("images/header-background.jpg");
   });


});