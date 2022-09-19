$(document).ready(function () {
    // header
    let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
    let dropdownIsOpen = false
    if (dropdowns.length) {
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', (event) => {
          let target = document.querySelector(`#${event.target.dataset.dropdown}`)
          if (target) {
            if (target.classList.contains('show')) {
              target.classList.remove('show')
              dropdownIsOpen = false
            } else {
              target.classList.add('show')
              dropdownIsOpen = true
            }
          }
        })
      })
    }
    
    // Handle closing dropdowns if a user clicked the body
    window.addEventListener('mouseup', (event) => {
      if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
          let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
          let targetIsDropdown = dropdown == event.target
    
          if (dropdownButton == event.target) {
            return
          }
    
          if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
            dropdown.classList.remove('show')
          }
        })
      }
    })
    
    // Open links in mobiles
    function handleSmallScreens() {
      document.querySelector('.navbar-toggler')
        .addEventListener('click', () => {
        let navbarMenu = document.querySelector('.navbar-menu')
    
        if (navbarMenu.style.display === 'flex') {
          navbarMenu.style.display = 'none'
          return
        }
    
        navbarMenu.style.display = 'flex'
      })
    }
    
    handleSmallScreens()

/*------------------------------------------------------------------------------*/
/* TopSearch
/*------------------------------------------------------------------------------*/
jQuery( ".ttm-header-search-link a" ).addClass('sclose');   
    
    jQuery( ".ttm-header-search-link a" ).on('click',function(event ) {  
  
                
        if (jQuery('.ttm-header-search-link a').hasClass('sclose')) {   
            jQuery(this).removeClass('sclose').addClass('open');    
            jQuery(".ttm-search-overlay").addClass('st-show'); 
            jQuery(".ttm-search-overlay").slideDown( 400, function() {          
                jQuery(".field.searchform-s").focus();  
            });     
        } else {
            jQuery(this).removeClass('open').addClass('sclose');
            jQuery(".ttm-search-overlay").slideUp( 400, function() {                                
            });
        }   

    jQuery(".ttm-search-close").on('click',function(){

        jQuery('.ttm-header-search-link a').removeClass('st-show').addClass('sclose');
        jQuery(".ttm-search-overlay").slideUp(400,function(){});

    });
});


    // slick slider
    $('.banner-slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay:true,
        autoplaySpeed:5000,
    });

    // counter
    let counter = document.querySelectorAll(".counter");
        let arr = Array.from(counter);

        arr.map((item) => {
            let count = item.innerHTML;
            item.innerHTML = "";
            let countNumber = 0;

            function counterUp() {
                item.innerHTML = countNumber++;
                if (countNumber > count) {
                    clearInterval(stop);
                }
            }
            let stop = setInterval(() => {
                counterUp();
            }, item.dataset.speed / count)
        });

       // timer
          var endDate = "octo 31, 2022 00:00:00";

          /* ***** Do not change this code below. ***** */
          var deadline = new Date(endDate).getTime();

          var x = setInterval(function () {
            var now = new Date().getTime();
            var t = deadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minute").innerHTML = minutes;
            document.getElementById("second").innerHTML = seconds;

            if (t < 0) {
              clearInterval(x);
              document.getElementById("day").innerHTML = "0";
              document.getElementById("hour").innerHTML = "0";
              document.getElementById("minute").innerHTML = "0";
              document.getElementById("second").innerHTML = "0";
            }
          }, 1000);

          // slick center mode
          $('.event-slider-main').slick({
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '285px',
            dots: false,
            arrows: true,
            infinite: true,
            nextArrow:'<i class="fa-light fa-angle-right slick-prev-arrow"></i>',
            prevArrow:'<i class="fa-light fa-angle-left slick-next-arrow"></i>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  centerPadding: '150px',
                },
              },
              {
                breakpoint: 769,
                settings: {
                  centerPadding: '50px',
                },
              },
              {
                breakpoint: 577,
                settings: {
                  centerMode: false,
                },
              },
            ],
          });

          // testimonial slider
          $('.client-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
        });

        // ===== Scroll to Top ==== 
        jQuery('#totop').hide();
        jQuery(window).scroll(function() {
            "use strict";
            if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
                jQuery('#totop').fadeIn(200);    // Fade in the arrow
                jQuery('#totop').addClass('top-visible');
            } else {
                jQuery('#totop').fadeOut(200);   // Else fade out the arrow
                jQuery('#totop').removeClass('top-visible');
            }
        });
        jQuery('#totop').on( "click", function() {      // When arrow is clicked
            jQuery('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
            return false;
        });

});