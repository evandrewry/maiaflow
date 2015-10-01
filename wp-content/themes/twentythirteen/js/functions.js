/**
 * Functionality specific to Twenty Thirteen.
 *
 * Provides helper functions to enhance the theme experience.
 */

( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window ),
		nav, button, menu;

	nav = $( '#site-navigation' );
	button = nav.find( '.menu-toggle' );
	menu = nav.find( '.nav-menu' );

	/**
	 * Adds a top margin to the footer if the sidebar widget area is higher
	 * than the rest of the page, to help the footer always visually clear
	 * the sidebar.
	 */
	$( function() {
		if ( body.is( '.sidebar' ) ) {
			var sidebar   = $( '#secondary .widget-area' ),
			    secondary = ( 0 === sidebar.length ) ? -40 : sidebar.height(),
			    margin    = $( '#tertiary .widget-area' ).height() - $( '#content' ).height() - secondary;

			if ( margin > 0 && _window.innerWidth() > 999 ) {
				$( '#colophon' ).css( 'margin-top', margin + 'px' );
			}
		}
	} );

	/**
	 * Enables menu toggle for small screens.
	 */
	( function() {
		if ( ! nav || ! button ) {
			return;
		}

		// Hide button if menu is missing or empty.
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}

		button.on( 'click.twentythirteen', function() {
			nav.toggleClass( 'toggled-on' );
			if ( nav.hasClass( 'toggled-on' ) ) {
				$( this ).attr( 'aria-expanded', 'true' );
				menu.attr( 'aria-expanded', 'true' );
			} else {
				$( this ).attr( 'aria-expanded', 'false' );
				menu.attr( 'aria-expanded', 'false' );
			}
		} );

		// Fix sub-menus for touch devices.
		if ( 'ontouchstart' in window ) {
			menu.find( '.menu-item-has-children > a, .page_item_has_children > a' ).on( 'touchstart.twentythirteen', function( e ) {
				var el = $( this ).parent( 'li' );

				if ( ! el.hasClass( 'focus' ) ) {
					e.preventDefault();
					el.toggleClass( 'focus' );
					el.siblings( '.focus' ).removeClass( 'focus' );
				}
			} );
		}

		// Better focus for hidden submenu items for accessibility.
		menu.find( 'a' ).on( 'focus.twentythirteen blur.twentythirteen', function() {
			$( this ).parents( '.menu-item, .page_item' ).toggleClass( 'focus' );
		} );
	} )();

	/**
	 * @summary Add or remove ARIA attributes.
	 * Uses jQuery's width() function to determine the size of the window and add
	 * the default ARIA attributes for the menu toggle if it's visible.
	 * @since Twenty Thirteen 1.5
	 */
	function onResizeARIA() {
		if ( 643 > _window.width() ) {
			button.attr( 'aria-expanded', 'false' );
			menu.attr( 'aria-expanded', 'false' );
			button.attr( 'aria-controls', 'primary-menu' );
		} else {
			button.removeAttr( 'aria-expanded' );
			menu.removeAttr( 'aria-expanded' );
			button.removeAttr( 'aria-controls' );
		}
	}

	_window
		.on( 'load.twentythirteen', onResizeARIA )
		.on( 'resize.twentythirteen', function() {
			onResizeARIA();
	} );

	/**
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.twentythirteen', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );

		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
				element.tabIndex = -1;
			}

			element.focus();
		}
	} );

	/**
	 * Arranges footer widgets vertically.
	 */
	if ( $.isFunction( $.fn.masonry ) ) {
		var columnWidth = body.is( '.sidebar' ) ? 228 : 245;

		$( '#secondary .widget-area' ).masonry( {
			itemSelector: '.widget',
			columnWidth: columnWidth,
			gutterWidth: 20,
			isRTL: body.is( '.rtl' )
		} );
	}

//MAIA CUSTOM STUFF
  window.orderedPosts = [];
  $('.post').each(function() {
    orderedPosts.push($(this).clone());
  })
  var columns = [$('.col.left'), $('.col.middle'), $('.col.right')],
      tags = $('.content-header-tags'),
      contentTitle = $('.content-header-title'),
      header = $('.site-header'),
      homeLink = $('.home-link-container'),
      navScroll = $('#nav-scroll'),
      $win = $(window);
  function shortestColumn() {
    function colHeight(col) {
      var h = col.height();
      if (col.hasClass('middle')) {
        h += col.height();
      }
      return h;
    }
    return columns.reduce(function(prev,curr) {
      return colHeight(curr) < colHeight(prev) ? curr : prev;
    }, columns[0]);
  }

  function isDesktop() {
    return $win.width() > 500;
  }

  if ( isDesktop() ) {
    if (columns[0][0]) {
      $('.post').each(function(index) {
        $(this).appendTo(shortestColumn());
      });
    }

    window.onInfiniteScrollDefault = function () {
      $('.infinite-wrap .post').each(function(index) {
        orderedPosts.push($(this).clone());
        $(this).appendTo(shortestColumn());
      });
    };
    window.onInfiniteScroll = window.onInfiniteScrollDefault
    $( document.body ).on( 'post-load', function() {
      window.onInfiniteScroll();
    });
  }

  var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
  //
  // vendor prefix management
  //
  function getSupportedPropertyName(properties) {
      for (var i = 0; i < properties.length; i++) {
          if (typeof document.body.style[properties[i]] != "undefined") {
              return properties[i];
          }
      }
      return null;
  }

  var transforms = ["transform",
                    "msTransform",
                    "webkitTransform",
                    "mozTransform",
                    "oTransform"];
  var transformProperty = getSupportedPropertyName(transforms);

  var scrolling = false;
  var mouseWheelActive = false;
  var count = 0;

  (function setup() {
    window.addEventListener("scroll", setScrolling, false);
    window.addEventListener("mousewheel", mouseScroll, false);
    window.addEventListener("DOMMouseScroll", mouseScroll, false);
    animationLoop();
  })()

  function mouseScroll() { mouseWheelActive = true; }
  function setScrolling() { scrolling = true; }

  //
  // Cross-browser way to get the current scroll position
  //
  function getScrollPosition() {
    if (document.documentElement.scrollTop == 0) {
        return document.body.scrollTop;
    } else {
        return document.documentElement.scrollTop;
    }
  }

  function animationLoop() {
      // adjust the image's position when scrolling
      if (scrolling) {
        animateColumn();
        animateTags();
        animateHeader();
        scrolling = false;
      }

      // scroll up or down by 10 pixels when the mousewheel is used

      requestAnimationFrame(animationLoop);
  }

  function animateColumn() {
    if(columns[1][0]) {
      columns[1][0].style['margin-top'] = Math.max(0, getScrollPosition() - $win.height()) / 2 + 'px';
    }
  }
  function getTagTransform(y) {
    return 'translate3d(-50%, ' + y + 'px, 0)'
  }
  function animateTags() {
    if(tags[0]) {
      tags[0].style[transformProperty] = getTagTransform(
        Math.max(
          150 - $win.height(),
          - getScrollPosition() / 2 - $win.height() / 3
        )
      );
      contentTitle[0].style[transformProperty] = getTagTransform(
        Math.max(
          -$win.height()/2 + contentTitle.height()/2,
          - getScrollPosition() / 2 - contentTitle.height()/2
        )
      );
    }
  }

  function getHeaderTransform(y) {
    return 'translate3d(0, ' + y + 'px, 0)'
  }
  function animateHeader() {
    if(header) {
      header[0].style[transformProperty] = getHeaderTransform(-getScrollPosition());
      homeLink[0].style[transformProperty] = getTagTransform(getScrollPosition());
      homeLink.fadeTo(0, ($win.height() - getScrollPosition() * 2) / $win.height());
      navScroll[0].style[transformProperty] = getTagTransform(getScrollPosition());
    }
  }



  $('.site-main').css('margin-top', $(window).height() - 50);
  $('.site-header').css('height', $(window).height());
  $(window).on('resize', function() {
    $('.site-main').css('margin-top', $(window).height() - 50);
    $('.site-header').css('height', $(window).height());
  });

  if (!$('body').hasClass('home')) {
    $('html,body').animate({scrollTop: $("#content").offset().top - 150}, 500);
  }

} )( jQuery );

angular.module('maiaflow',['sticky'])
  .directive('scrollToTop', function() {
    var $ = jQuery;
    return {
      link: function(scope, elem, attr) {
        elem.click(function() {
          $('html,body').animate({scrollTop: $("#content").offset().top - 150}, 500);
        });
      }
    };
  })
  .directive('mfTagFilterToggle', function($rootScope) {
    var $ = jQuery,
        columns = [$('.col.left'), $('.col.middle'), $('.col.right')];
    function shortestColumn() {
      return columns.reduce(function(prev,curr) {
        return curr.offset().top + curr.height() < prev.offset().top + prev.height() ? curr : prev;
      }, columns[0]);
    }
    function filterTags(slug) {
      function unfilterElements(post) {
        post.appendTo(shortestColumn()).show();
      }
      function filterElements(post) {
        if (post.hasClass('tag-' + slug)) {
          post.appendTo(shortestColumn()).show();
        } else {
          post.hide();
        }
      }
      $('#content').css('min-height', $(window).height() * 2);
      if ($rootScope.activeTag == slug) {
        $rootScope.activeTag = undefined;
        $('.post').hide();
        orderedPosts.map(unfilterElements);
        window.onInfiniteScroll = window.onInfiniteScrollDefault
      } else {
        $rootScope.activeTag = slug;
        $('.post').hide();
        orderedPosts.map(filterElements);
        window.onInfiniteScroll = function () {
          $('.infinite-wrap .post').each(function() {
            orderedPosts.push($(this).clone());
            filterElements($(this));
          });
        };
      }
      $('#content').css('min-height', '');
      $rootScope.$apply()
    }
    return {
      link: function(scope, elem, attr) {
        elem.click(filterTags.bind(null, attr.mfTagFilterToggle))
      }
    };
});
