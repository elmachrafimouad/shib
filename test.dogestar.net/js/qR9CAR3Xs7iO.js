!function(e){e(window).on("scroll resize load",(function(){!function(){var t=e("#thhf-masthead"),n=e("#thhf-masthead-sticky"),a=e("#wpadminbar"),i=e(window).scrollTop();if(a.length)var l=a.height();else l=0;$mobileAdminBar=l,t.length&&n.length?t.height()<i?(n.css({position:"fixed",display:"inherit",top:0+l}),n.show()):(n.css({position:"relative",display:"inherit",top:0}),n.hasClass("sticky-stacked")?n.show():n.hide()):(n.css({position:"fixed",display:"inherit",top:0+$mobileAdminBar}),a.css({position:"fixed",display:"inherit",top:0}))}()}));var t=function(e,t){if(void 0!==e){var n=e.find("input.thhf-search-form__input"),a=e.find("button#clear"),i=e.find("button#clear-with-button"),l=e.find(".hfe-search-submit"),s=e.find(".thhf-search-icon-toggle input");e.find(".thhf-search-icon-toggle").on("click",(function(){e.find(".thhf-search-form-wrapper").addClass("active")})),e.find(".thhf-search-overlay-close").on("click",(function(){e.find(".thhf-search-form-wrapper").removeClass("active")})),e.find(".thhf-search-form__input").blur((function(){e.find(".thhf-search-button-wrapper").removeClass("hfe-input-focus")})),l.on("touchstart click",(function(){n.submit()})),s.css("padding-right",s.next().outerWidth()+"px"),n.on("keyup",(function(){a.style=this.value.length?a.css("visibility","visible"):a.css("visibility","hidden"),i.style=this.value.length?i.css("visibility","visible"):i.css("visibility","hidden"),i.css("right",l.outerWidth()+"px")})),a.on("click",(function(){this.style=a.css("visibility","hidden"),n.value=""})),i.on("click",(function(){this.style=i.css("visibility","hidden"),n.value=""}))}},n=function(e,t){if(void 0!==e){var n=e.data("id"),m=(e.find(".elementor-widget-hfe-nav-menu "),t(".elementor-element-"+n+" .hfe-nav-menu").data("layout")),r=(t(".elementor-element-"+n+" .hfe-flyout-wrapper").data("flyout-class"),t(".elementor-element-"+n+" .hfe-nav-menu").data("last-item")),h=t(".elementor-element-"+n+" .hfe-flyout-wrapper").data("last-item");t("div.hfe-has-submenu-container").removeClass("sub-menu-active"),o(n),("horizontal"!==m||"horizontal"===m&&window.matchMedia("( max-width: 767px )").matches||"horizontal"===m&&window.matchMedia("( max-width: 1024px )").matches)&&l(n),t(".elementor-element-"+n+" .hfe-flyout-trigger .hfe-nav-menu-icon").off("click keyup").on("click keyup",(function(){a(n)})),t(".elementor-element-"+n+" .hfe-flyout-close").off("click keyup").on("click keyup",(function(){i(n)})),t(".elementor-element-"+n+" .hfe-flyout-overlay").off("click").on("click",(function(){i(n)})),e.find(".sub-menu").each((function(){var n=t(this).closest(".menu-item");e.find(n).addClass("parent-has-child"),e.find(n).removeClass("parent-has-no-child")})),"cta"!=r&&"cta"!=h||"expandible"==m||(t(".elementor-element-"+n+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),t(".elementor-element-"+n+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button")),s(n),t(window).on("resize",(function(){("horizontal"!==m||"horizontal"===m&&window.matchMedia("( max-width: 767px )").matches||"horizontal"===m&&window.matchMedia("( max-width: 1024px )").matches)&&l(n),"horizontal"==m&&window.matchMedia("( min-width: 977px )").matches&&t(".elementor-element-"+n+" div.hfe-has-submenu-container").next().css("position","absolute"),"expandible"==m||"flyout"==m?o(n):"vertical"!=m&&"horizontal"!=m||(window.matchMedia("( max-width: 767px )").matches&&(t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))||window.matchMedia("( max-width: 1024px )").matches&&t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet"))&&o(n),s(n)})),e.find(".parent-has-child .hfe-has-submenu-container a").attr("aria-haspopup","true"),e.find(".parent-has-child .hfe-has-submenu-container a").attr("aria-expanded","false"),e.find(".hfe-nav-menu__toggle").attr("aria-haspopup","true"),e.find(".hfe-nav-menu__toggle").attr("aria-expanded","false"),t(document).trigger("hfe_nav_menu_init",n),t(".elementor-element-"+n+" div.hfe-has-submenu-container").on("keyup",(function(e){var a=t(this);a.parent().hasClass("menu-active")?(a.parent().removeClass("menu-active"),a.parent().next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),a.parent().prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),a.parent().next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),a.parent().prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active")):(a.parent().next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),a.parent().prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),a.parent().next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),a.parent().prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),a.parent().siblings().find(".hfe-has-submenu-container a").attr("aria-expanded","false"),a.parent().next().removeClass("menu-active"),a.parent().prev().removeClass("menu-active"),event.preventDefault(),a.parent().addClass("menu-active"),"horizontal"!==m&&a.addClass("sub-menu-active"),a.find("a").attr("aria-expanded","true"),a.next().css({visibility:"visible",opacity:"1",height:"auto"}),"horizontal"!==m||"horizontal"===m&&window.matchMedia("( max-width: 767px )").matches&&(t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))?a.next().css("position","relative"):"horizontal"===m&&window.matchMedia("( max-width: 1024px )").matches&&(t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")?a.next().css("position","relative"):(t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile")||t(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-none"))&&a.next().css("position","absolute")))})),t(".elementor-element-"+n+" li.menu-item").on("keyup",(function(e){var n=t(this);n.next().find("a").attr("aria-expanded","false"),n.prev().find("a").attr("aria-expanded","false"),n.next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),n.prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),n.siblings().removeClass("menu-active"),n.next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),n.prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active")}))}};function a(t){var n=e("#hfe-flyout-content-id-"+t),a=e("#hfe-flyout-content-id-"+t).data("layout"),i=e("#hfe-flyout-content-id-"+t).data("flyout-type"),l=n.width()+"px",s=e(".elementor-element-"+t+" .hfe-flyout-container .hfe-side.hfe-flyout-"+a);e(".elementor-element-"+t+" .hfe-flyout-overlay").fadeIn(100),"left"==a?(e("body").css("margin-left","0"),s.css("left","0"),"push"==i&&e("body").addClass("hfe-flyout-animating").css({position:"absolute",width:"100%","margin-left":l,"margin-right":"auto"}),s.addClass("hfe-flyout-show")):(e("body").css("margin-right","0"),s.css("right","0"),"push"==i&&e("body").addClass("hfe-flyout-animating").css({position:"absolute",width:"100%","margin-left":"-"+l,"margin-right":"auto"}),s.addClass("hfe-flyout-show"))}function i(t){var n=e("#hfe-flyout-content-id-"+t),a=e("#hfe-flyout-content-id-"+t).data("layout"),i=n.width()+"px",l=e("#hfe-flyout-content-id-"+t).data("flyout-type"),s=e(".elementor-element-"+t+" .hfe-flyout-container .hfe-side.hfe-flyout-"+a);e(".elementor-element-"+t+" .hfe-flyout-overlay").fadeOut(100),"left"==a?(s.css("left","-"+i),"push"==l&&(e("body").css({position:"","margin-left":"","margin-right":""}),setTimeout((function(){e("body").removeClass("hfe-flyout-animating").css({width:""})}))),s.removeClass("hfe-flyout-show")):(s.css("right","-"+i),"push"==l&&(e("body").css({position:"","margin-right":"","margin-left":""}),setTimeout((function(){e("body").removeClass("hfe-flyout-animating").css({width:""})}))),s.removeClass("hfe-flyout-show"))}function l(t){var n=e(".elementor-element-"+t+" .hfe-nav-menu").data("layout");e(".elementor-element-"+t+" div.hfe-has-submenu-container").off("click").on("click",(function(a){var i=e(this);e(".elementor-element-"+t).hasClass("hfe-link-redirect-child")&&(i.hasClass("sub-menu-active")?i.next().hasClass("sub-menu-open")?(i.find("a").attr("aria-expanded","false"),i.removeClass("sub-menu-active"),i.next().removeClass("sub-menu-open"),i.next().css({visibility:"hidden",opacity:"0",height:"0"}),i.next().css({transition:"none"}),"horizontal"!==n||"horizontal"===n&&window.matchMedia("( max-width: 767px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))?i.next().css("position","relative"):"horizontal"===n&&window.matchMedia("( max-width: 1024px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))&&i.next().css("position","absolute")):(i.find("a").attr("aria-expanded","false"),("horizontal"!==n||"horizontal"===n&&window.matchMedia("( max-width: 767px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))||"horizontal"===n&&window.matchMedia("( max-width: 1024px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile")))&&(a.preventDefault(),i.next().css("position","relative")),i.removeClass("sub-menu-active"),i.next().removeClass("sub-menu-open"),i.next().css({visibility:"hidden",opacity:"0",height:"0"}),i.next().css({transition:"none"})):(i.find("a").attr("aria-expanded","true"),"horizontal"!==n||"horizontal"===n&&window.matchMedia("( max-width: 767px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))?(a.preventDefault(),i.next().css("position","relative")):"horizontal"===n&&window.matchMedia("( max-width: 1024px )").matches&&(a.preventDefault(),e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")?i.next().css("position","relative"):(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-none"))&&i.next().css("position","absolute")),i.addClass("sub-menu-active"),i.next().addClass("sub-menu-open"),i.next().css({visibility:"visible",opacity:"1",height:"auto"}),i.next().css({transition:"0.3s ease"})))})),e(".elementor-element-"+t+" .hfe-menu-toggle").off("click keyup").on("click keyup",(function(a){var i=e(this);i.parent().parent().hasClass("menu-active")?(a.preventDefault(),i.parent().parent().removeClass("menu-active"),i.parent().parent().next().css({visibility:"hidden",opacity:"0",height:"0"}),"horizontal"!==n||"horizontal"===n&&window.matchMedia("( max-width: 767px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))?i.parent().parent().next().css("position","relative"):"horizontal"===n&&window.matchMedia("( max-width: 1024px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")?i.parent().parent().next().css("position","relative"):(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-none"))&&i.parent().parent().next().css("position","absolute"))):(a.preventDefault(),i.parent().parent().addClass("menu-active"),i.parent().parent().next().css({visibility:"visible",opacity:"1",height:"auto"}),"horizontal"!==n||"horizontal"===n&&window.matchMedia("( max-width: 767px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile"))?i.parent().parent().next().css("position","relative"):"horizontal"===n&&window.matchMedia("( max-width: 1024px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")?i.parent().parent().next().css("position","relative"):(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-none"))&&i.parent().parent().next().css("position","absolute")))}))}function s(t){var n=e(".elementor-element-"+t+" .hfe-nav-menu").data("last-item"),a=e(".elementor-element-"+t+" .hfe-flyout-wrapper").data("last-item"),i=e(".elementor-element-"+t+" .hfe-nav-menu").data("layout");e(".elementor-element-"+t+" nav").removeClass("hfe-dropdown"),window.matchMedia("( max-width: 767px )").matches?e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-mobile")||e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")?(e(".elementor-element-"+t+" nav").addClass("hfe-dropdown"),"cta"!=n&&"cta"!=a||"expandible"==i||(e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button"))):(e(".elementor-element-"+t+" nav").removeClass("hfe-dropdown"),"cta"!=n&&"cta"!=a||"expandible"==i||(e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button"))):window.matchMedia("( max-width: 1024px )").matches&&(e(".elementor-element-"+t).hasClass("hfe-nav-menu__breakpoint-tablet")?(e(".elementor-element-"+t+" nav").addClass("hfe-dropdown"),"cta"!=n&&"cta"!=a||"expandible"==i||(e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button"))):(e(".elementor-element-"+t+" nav").removeClass("hfe-dropdown"),"cta"!=n&&"cta"!=a||"expandible"==i||(e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button")))),"expandible"==(i=e(".elementor-element-"+t+" .hfe-nav-menu").data("layout"))&&("cta"!=n&&"cta"!=a||"expandible"==i||(e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),e(".elementor-element-"+t+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button"))),e(".elementor-element-"+t+" nav").hasClass("hfe-dropdown")||e(".elementor-element-"+t+" nav").removeAttr("style")}function o(t){if(e(".elementor-element-"+t+" .hfe-nav-menu__toggle").hasClass("hfe-active-menu-full-width")){e(".elementor-element-"+t+" .hfe-nav-menu__toggle").next().css("left","0");var n=e(".elementor-element-"+t).closest(".elementor-section").outerWidth(),a=e(".elementor-element-"+t).closest(".elementor-section").offset().left-e(".elementor-element-"+t+" .hfe-nav-menu__toggle").next().offset().left;e(".elementor-element-"+t+" .hfe-nav-menu__toggle").next().css("width",n+"px"),e(".elementor-element-"+t+" .hfe-nav-menu__toggle").next().css("left",a+"px")}e(".elementor-element-"+t+" .hfe-nav-menu__toggle").off("click keyup").on("click keyup",(function(n){var a=e(this),i=a.next();if(a.hasClass("hfe-active-menu")){e(".elementor-element-"+t+" .hfe-nav-menu").data("layout");var l=i.data("full-width"),s=e(".elementor-element-"+t+" nav").data("toggle-icon");e(".elementor-element-"+t).find(".hfe-nav-menu-icon").html(s),a.removeClass("hfe-active-menu"),a.attr("aria-expanded","false"),"yes"==l&&(a.removeClass("hfe-active-menu-full-width"),i.css("width","auto"),i.css("left","0"),i.css("z-index","0"))}else{e(".elementor-element-"+t+" .hfe-nav-menu").data("layout"),l=i.data("full-width");var o=e(".elementor-element-"+t+" nav").data("close-icon");if(e(".elementor-element-"+t).find(".hfe-nav-menu-icon").html(o),a.addClass("hfe-active-menu"),a.attr("aria-expanded","true"),"yes"==l){a.addClass("hfe-active-menu-full-width");var m=e(".elementor-element-"+t).closest(".elementor-section").outerWidth(),r=e(".elementor-element-"+t).closest(".elementor-section").offset().left-i.offset().left;i.css("width",m+"px"),i.css("left",r+"px"),i.css("z-index","9999")}}e(".elementor-element-"+t+" nav").hasClass("menu-is-active")?e(".elementor-element-"+t+" nav").removeClass("menu-is-active"):e(".elementor-element-"+t+" nav").addClass("menu-is-active")}))}e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/thhf-navigation-menu.default",n),elementorFrontend.hooks.addAction("frontend/element_ready/thhf-search-button.default",t)}))}(jQuery);