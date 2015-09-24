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

  var columns = [$('.col.left'), $('.col.middle'), $('.col.right')],
      postIndex = 0;
  $('.post').each(function(index) {
    $(this).appendTo(columns[postIndex%3][0]);
    postIndex++;
  });
  $(window).scroll(function(event) {
    $('.col.middle').css('margin-top', Math.max(0,$(this).scrollTop()/3 - $(this).height()/5))
  });
  window.onInfiniteScrollDefault = function () {
    $('.infinite-wrap .post').each(function(index) {
      $(this).appendTo(columns[postIndex%3][0]);
      postIndex++;
    });
  };
  window.onInfiniteScroll = window.onInfiniteScrollDefault
  $( document.body ).on( 'post-load', function() {
    window.onInfiniteScroll();
  });

  $('.site-main').css('margin-top', $(window).height());
  $(window).on('resize', function() {
    $('.site-main').css('margin-top', $(window).height());
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
  //.directive('sticky', function() {
  //  return {
  //    link: function(scope, elem, attr) {
  //      jQuery(window).scroll(function(event) {
  //        if (elem.offset().top < jQuery(window).scrollTop() - 100) {
  //          elem.css('position', 'fixed');
  //          elem.css('top', '100px');
  //          elem.css('padding', '0');
  //        } else {
  //          elem.css('position', '');
  //          elem.css('top', '');
  //          elem.css('padding', '');
  //        }
  //        console.log(jQuery(window).scrollTop(), elem.offset(), event);
  //      });
  //    }
  //  };
  //})
  .directive('mfTagFilterToggle', function() {
    var $ = jQuery;
    var columns = [$('.col.left'), $('.col.middle'), $('.col.right')];
    function filterTags(slug) {
      var postIndex = 0;
      $('.post').each(function(index) {
        if ($(this).hasClass('tag-' + slug)) {
          $(this).appendTo(columns[postIndex%3][0]).show();
          postIndex++;
        } else {
          $(this).hide();
        }
      });
      window.onInfiniteScroll = function () {
        $('.infinite-wrap .post').each(function(index) {
          if ($(this).hasClass('tag-' + slug)) {
            $(this).appendTo(columns[postIndex%3][0]).show();
            postIndex++;
          } else {
            $(this).hide();
          }
        });
      };
    }
    return {
      link: function(scope, elem, attr) {
        elem.click(filterTags.bind(null, attr.mfTagFilterToggle))
      }
    };
});
