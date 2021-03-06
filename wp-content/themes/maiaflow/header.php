<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width">
  <title><?php wp_title( '•', true, 'right' ); ?></title>
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <!--[if lt IE 9]>
  <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
  <![endif]-->
  <?php wp_head(); ?>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script type="text/javascript">!function(){"use strict";var t=angular.module("sticky",[]);t.directive("sticky",function(){function t(t,e,o){function s(){if(y.offsetWidth=h.offsetWidth,f(),n(),x){var t=window.getComputedStyle(h.parentElement,null),o=h.parentElement.offsetWidth-t.getPropertyValue("padding-right").replace("px","")-t.getPropertyValue("padding-left").replace("px","");e.css("width",o+"px")}}function i(){g.off("scroll",n),g.off("resize",s),m&&w.removeClass(m),I&&I.remove()}function n(){var t,e,s,i;if(d&&!P("("+d+")").matches&&!P(d).matches)return void(x&&f());if("top"===W?(i=window.pageYOffset||v.scrollTop,t=i-(v.clientTop||0),e=L===!0?t>=T&&k>=t:t>=T):(s=window.pageYOffset+window.innerHeight,e=T>=s),!e||l(o.stickLimit)||x){if(!e&&x){var n,c,p;c=[T,k],p=r(c,t),p==T?n="top":p==k&&(n="bottom"),f(n,t)}}else a()}function r(t,e){var o,s=0,i=1e3;for(s in t){var n=Math.abs(e-t[s]);i>n&&(i=n,o=t[s])}return o}function a(){var t,o;if(t=e[0].getBoundingClientRect(),o=t.left,y.offsetWidth=h.offsetWidth,x=!0,m&&w.addClass(m),u&&e.addClass(u),e.css("width",h.offsetWidth+"px").css("position","fixed").css(W,H+"px").css("left",o).css("margin-top",0),"bottom"===W&&e.css("margin-bottom",0),B){I=angular.element("<div>");var s=e[0].offsetHeight;I.css("height",s+"px"),e.after(I)}}function f(t){e.attr("style",b),x=!1,m&&w.removeClass(m),u&&e.removeClass(u),"top"==t?e.css("width","").css("top",y.top).css("position",y.position).css("left",y.cssLeft).css("margin-top",y.marginTop):"bottom"==t&&L===!0&&e.css("width","").css("top","").css("bottom",0).css("position","absolute").css("left",y.cssLeft).css("margin-top",y.marginTop).css("margin-bottom",y.marginBottom),I&&I.remove()}function c(t){if(t.getBoundingClientRect)return t.getBoundingClientRect().top;var e=0;if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent;while(t);return e}function p(t){return t.offsetTop+t.clientHeight}function l(t){if("true"===t){var e=h.offsetHeight,o=window.innerHeight;return o-(e+parseInt(H))<0}return!1}var d,u,m,h,g,w,v,y,b,C,x,T,k,H,W,L,M,P,B,I;switch(C=!1,x=!1,P=window.matchMedia,g=angular.element(window),w=angular.element(document.body),h=e[0],v=document.documentElement,d=o.mediaQuery||!1,u=o.stickyClass||"",m=o.bodyClass||"",B=void 0==o.useplaceholder?!1:!0,b=e.attr("style")||"",H="string"==typeof o.offset?parseInt(o.offset.replace(/px;?/,"")):0,W="string"==typeof o.anchor?o.anchor.toLowerCase().trim():"top",L="string"==typeof o.confine?o.confine.toLowerCase().trim():"false",L="true"===L,y={top:e.css("top"),width:e.css("width"),position:e.css("position"),marginTop:e.css("margin-top"),cssLeft:e.css("left")},W){case"top":case"bottom":break;default:W="top"}g.on("scroll",n),g.on("resize",t.$apply.bind(t,s)),t.$on("$destroy",i),M=c(h),t.$watch(function(){return x?M:M="top"===W?c(h):p(h)},function(t,o){if((t!==o||"undefined"==typeof T)&&0!==t){T=t-H,L&&e.parent().css({position:"relative"});var s=e.parent()[0],i=parseInt(s.offsetHeight),r=parseInt(e.css("margin-bottom").replace(/px;?/,""))||0;k=i-(h.offsetTop+h.offsetHeight)+H+r,n()}})}return{restrict:"A",link:t}}),window.matchMedia=window.matchMedia||function(){var t="angular-sticky: This browser does not support matchMedia, therefore the minWidth option will not work on this browser. Polyfill matchMedia to fix this issue.";return window.console&&console.warn&&console.warn(t),function(){return{matches:!0}}}()}();</script>
  <link href='https://fonts.googleapis.com/css?family=Shanti|Oxygen|Cabin:500,600|Amaranth:400,700|Karla:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
  <link rel="shortcut icon" href="/favicon.ico" />

</head>

<body <?php body_class(); ?> ng-app="maiaflow">
  <div id="page" class="hfeed site">
    <div id="navbar" class="navbar" ng-class="{open: showNav}">
      <button id="nav-toggle" ng-click="showNav = !showNav">
        <span ng-show="!showNav">Menu</span>
        <span ng-show="showNav">Close</span>
      </button>
      <nav ng-show="showNav" id="site-navigation" class="navigation main-navigation" role="navigation">
        <a class="screen-reader-text skip-link" href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentythirteen' ); ?>"><?php _e( 'Skip to content', 'twentythirteen' ); ?></a>
        <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu ng-cloak', 'menu_id' => 'primary-menu' ) ); ?>
      </nav><!-- #site-navigation -->
    </div><!-- #navbar -->

    <header id="masthead" class="site-header" role="banner">
      <div class="home-link-container">
        <a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
          <h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
          <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
        </a>
      </div>

      <button id="nav-scroll" scroll-to-top>
        <span>Scroll</span>
      </button>

    </header><!-- #masthead -->

    <div id="main" class="site-main">
