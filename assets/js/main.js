/************* Main Js File ************************
    Template Name: Faf
    Author: Themescare
    Version: 1.0
    Copyright 2020
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
01 - Menu Toggle JS
02 - Search Toggle
03 - Main Slider JS
04 - Testimonial Slider JS
05 - Counter JS
06 - Mouse Cursor JS
07 - Youtube Popup JS
08 - Quantity Js
09 - Range sliders
10 - Header Scroll

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Menu Toggle JS
		=================================================================	
		*/
		$(".menu-toggle").on("click", function () {
			$(this).toggleClass("is-active");
		});

		/* 
                 ================================================================
                    Game search bar functionality
		 ================================================================   
                */
		$("#gameSearch").on("input", function () {
    let input = $(this).val().toLowerCase();
    let results = [];

    $(".game-card").each(function () {
        let title = $(this).data("title").toLowerCase();
        if (title.includes(input)) {
            results.push(title);
        }
    });

    let $dropdown = $("#searchResults");
    $dropdown.empty();

    if (input && results.length) {
        results.forEach(function (title) {
            $dropdown.append(`<li>${title}</li>`);
        });
        $dropdown.show();
    } else {
        $dropdown.hide();
    }
});

// Optional: click to fill
$(document).on("click", "#searchResults li", function () {
    $("#gameSearch").val($(this).text());
    $("#searchResults").hide();
});


		/* 
		=================================================================
		02 - Search Toggle
		=================================================================	
		*/
        
        $("#search-trigger").on("click", function () {
			$(".search-block").toggleClass("active");
		});
        
        $(".search-block input").on("click", function () {
			$(".search-block span").toggleClass("active");
		});
        
        $(".search-toggle").on("click", function () {
			$(".search-block").removeClass("active");
			$(".search-block span").removeClass("active");
		});
        


		/* 
		=================================================================
		03 - Main Slider JS
		=================================================================	
		*/

		$(".fag-slide").owlCarousel({
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeIn',
			items: 2,
			nav: false,
			dots: true,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: false,
			loop: true,
			navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 1
				},
				1000: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});

		$(".fag-slide").on("translate.owl.carousel", function () {
			$(".fag-main-slide h2, .fag-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".fag-main-slide .fag-btn-outline").removeClass("animated fadeInDown").css("opacity", "0");
			$(".fag-main-slide h3").removeClass("animated fadeInLeft").css("opacity", "0");
		});
		$(".fag-slide").on("translated.owl.carousel", function () {
			$(".fag-main-slide h2, .fag-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".fag-main-slide .fag-btn-outline").addClass("animated fadeInDown").css("opacity", "1");
			$(".fag-main-slide h3").addClass("animated fadeInLeft").css("opacity", "1");
		});


		/* 


document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-consent-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "block"; // Show the banner
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Save the user's choice
        banner.style.display = "none"; // Hide the banner
    });
});

  
		=================================================================
		04 - Testimonial Slider JS
		=================================================================	
		*/

		$(".testimonial-slider").owlCarousel({
			margin: 20,
			nav: true,
			dots: false,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-angle-left'><i>", "<i class='fa fa-angle-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});



		/* 
		=================================================================
		06 - Mouse Cursor JS
		=================================================================	
		*/


		$('body').on("mouseup", function () {
			$('#cursor-small').removeClass("click");
		});

		$('body').on('click', function (e) {
			$('#cursor-small').css({
				left: e.pageX,
				top: e.pageY
			});
			$('#cursor-small').addClass("click");
		});

		var cursorLarge = $('#cursor-large');
		var cursorSmall = $('#cursor-small');

		$(document).mousemove(function (e) {
			var x = e.clientX;
			var y = e.clientY;

			cursorLarge.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
			cursorSmall.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
		});

		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/
		var $animation_elements = $('.heading_animation');
		var $window = $(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function () {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top + 150;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('extend');
				}
			});
		}
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');


		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/

		$('.popup-youtube, .play-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			preloader: true,
		});

		/*==============================
		08 - Quantity Js
		==============================*/
        $(".num-in span").on("click", function () {
			var $input = $(this).parents('.num-block').find('input.in-num');
			if ($(this).hasClass('minus')) {
				var count = parseFloat($input.val()) - 1;
				count = count < 1 ? 1 : count;
				if (count < 2) {
					$(this).addClass('dis');
				} else {
					$(this).removeClass('dis');
				}
				$input.val(count);
			} else {
				var count = parseFloat($input.val()) + 1
				$input.val(count);
				if (count > 1) {
					$(this).parents('.num-block').find(('.minus')).removeClass('dis');
				}
			}

			$input.change();
			return false;
		});
        


		/*==============================
		09 - Range sliders
		==============================*/

		if ($('#filter_range').length) {
			var firstSlider = document.getElementById('filter_range');
			noUiSlider.create(firstSlider, {
				range: {
					'min': 0,
					'max': 500
				},
				step: 1,
				connect: true,
				start: [18, 300],
				format: wNumb({
					decimals: 0,
					prefix: '$'
				})
			});
			var firstValues = [
				document.getElementById('filter_range-start'),
				document.getElementById('filter_range-end')
			];
			firstSlider.noUiSlider.on('update', function (values, handle) {
				firstValues[handle].innerHTML = values[handle];
			});
		} else {
			return false;
		}


	});

	/*==============================
	10 - Header Scroll
	==============================*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.fag-header').addClass('scroll');
		} else {
			$('.fag-header').removeClass('scroll');
		}

	});


}(jQuery));
/* 
=================================================
	search bar code for every page
=================================================
*/
document.addEventListener("DOMContentLoaded", function() {
    let games = [];
    let isDataLoaded = false;

    // Fetch games
    fetch("https://76-unblockedgames.github.io/games.json")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(data => {
            games = data;
            isDataLoaded = true;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById("gameList").innerHTML = "<p>Error loading games</p>";
        });
	
	 
  // Search function
    document.getElementById("gameSearch").addEventListener("input", function() {
        const input = this.value.trim().toLowerCase();
        const gameList = document.getElementById("gameList");
        
        gameList.innerHTML = "";
        gameList.style.display = "block";

        // Hide if empty
        if (!input) {
            gameList.style.display = "none";
            return;
        }

        // Show loading if data isn't ready
        if (!isDataLoaded) {
            gameList.innerHTML = "<p>Loading games...</p>";
            return;
        }

        // Filter games STARTING with input letter
        const results = games.filter(game => 
            game.name.toLowerCase().startsWith(input)
        );

        // Display results
        if (results.length > 0) {
            results.forEach(game => {
                const item = document.createElement("div");
                item.className = "game-item";
                item.innerHTML = `<a href="https://76-unblockedgames.github.io/${game.url}">${game.name}</a>`;
                gameList.appendChild(item);
            });
        } else {
            gameList.innerHTML = "<p>No results found</p>";
        }
    });

    // Close results when clicking outside
    document.addEventListener("click", function(e) {
        if (!e.target.closest("#gameSearch, #gameList")) {
            document.getElementById("gameList").style.display = "none";
        }
    });
});

//  url remove all slashes code below 
document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (href) {
    // Ignore full URLs like https:// or http://
    const cleanedHref = href.replace(/([^:]\/)\/+/g, '$1');
    link.setAttribute('href', cleanedHref);
  }
});
