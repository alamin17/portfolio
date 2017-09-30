(function(){
	
	"use strict";
	
		var $window, $document, $body;
		$window = $(window);
		$document = $(document);
		$body = $("body");
		
		
	//Menu Fixed Top
	
	var fixed_top = $(".menu-scroll");

	$(window).on('scroll', function() {
		
		if( $(this).scrollTop() > 100 ){	
			fixed_top.addClass("menu-fixed animated fadeInDown");
		}
		else{
			fixed_top.removeClass("menu-fixed animated fadeInDown");
		}
		
	});
	

	
	//Progress Bar
	
	$('.progress .progress-bar').progressbar({display_text: 'top'});
	
		
	//Client 
	
	var swiper = new Swiper('.client-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        spaceBetween: 30,
		autoplay: false,
		paginationClickable: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		 breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
		
	//Blog 
	
	var swiper = new Swiper('.blog-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        spaceBetween: 30,
		autoplay: false,
		paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		 breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
	
	//Partner 
	
	var swiper = new Swiper('.partner-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        spaceBetween: 30,
		autoplay: 4000,
		paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		 breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
	
	
	//Scroll Top Top 
		
		var link,
		toggleScrollToTopLink = function(){
			
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0){
				link.fadeIn(400);
			}else{
				link.fadeOut(400);
			}
			
		};
		
			link = $(".scroll-img");
			
			$(window).scroll(toggleScrollToTopLink);
			
			toggleScrollToTopLink();
			
			link.on("click", function(){
				
				$("body").animate({scrollTop: 0});
				$("html").animate({scrollTop: 0});
				
			});
	
	
		//Menu Scroll 
		
		$('a.page-scroll').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		
		/* preloader */
		
		$window.on('load', function() {
			
			$('#loader').fadeOut(); // 
			$('#preloader').delay(350).fadeOut('slow'); 
			
			//Portfilio Gallery

			$('#portfolio').imagesLoaded( function() {
			
				$('.portfolio-btn').on( 'click', 'a', function() {
				  var filterValue = $(this).attr('data-filter');
				  $grid.isotope({ filter: filterValue });
				});
			
				var $grid = $('.grid').isotope({
				  itemSelector: '.portfolio-items',
				  percentPosition: true,
				  masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: '.portfolio-items'
				  }
				})
				
				$('.portfolio-btn').each( function( i, buttonGroup ) {
				  var $buttonGroup = $( buttonGroup );
				  $buttonGroup.on( 'click', 'a', function() {
					$buttonGroup.find('.is-checked').removeClass('is-checked');
					$( this ).addClass('is-checked');
				  });
				});
			
			});
		});
		
		//Lightcase
	
		 $('a[data-rel^=lightcase]').lightcase();
		  
		 
		  
	
	
	
	
	
		
	
})(jQuery);