;(function($) {

    'use strict'

    var portfolioCube = function() {
        if ( $().cubeportfolio ) {
            $('.themesflat_sc_vc-portfolios-grid').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                gapH = Number($this.data("gaph")),
                gapV = Number($this.data("gapv")),
                filter = $this.data("filter");

                if ( !filter ) { filter = '*'; }
                else { filter = '.' + filter; }

                $(this).find('#portfolio').cubeportfolio({
                    filters: '#portfolios-filter',
                    layoutMode: 'grid',
                    defaultFilter: filter,
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: false,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: 'overlayBottomAlong',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        }
    };

    var galleryCube = function() {
        if ( $().cubeportfolio ) {
            $('.themesflat_sc_vc-gallery').each(function() {
                var
                $this = $(this),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                item4 = $this.data("column4"),
                gapH = Number($this.data("gaph")),
                gapV = Number($this.data("gapv"));                

                $(this).find('#gallery').cubeportfolio({
                    layoutMode: 'grid',
                    animationType: 'quicksand',
                    gapHorizontal: gapH,
                    gapVertical: gapV,
                    showNavigation: true,
                    showPagination: true,
                    gridAdjustment: 'responsive',
                    rewindNav: false,
                    auto: false,
                    mediaQueries: [{
                        width: 1500,
                        cols: item
                    }, {
                        width: 1100,
                        cols: item
                    }, {
                        width: 800,
                        cols: item2
                    }, {
                        width: 550,
                        cols: item3
                    }, {
                        width: 320,
                        cols: item4
                    }],
                    caption: 'overlayBottomAlong',
                    displayType: 'bottomToTop',
                    displayTypeSpeed: 100
                });
            });
        }
    };
 
    var galleryJustified = function() {
      if ($('.justified_gallery').length > 0) {
          $(".justified_gallery").justifiedGallery();
          var $justifiedgallery = $('.justified_gallery');
          $justifiedgallery.each(function () {
              var $element = $(this),
              rowHeight = $element.attr('data-rowHeight') || "200",
              margins = $element.attr('data-margins') || "10"             
              $element.appear(function () {
                  $element.justifiedGallery({
                      rowHeight: Number(rowHeight),
                      margins: Number(margins),
                  });
              });
          });
      };
    }

    var imagesCube = function() {
        $('.themesflat_sc_vc-images-grid').each(function() {
            var
            $this = $(this),
            layout = $this.data("layout"),
            item = $this.data("column"),
            item2 = $this.data("column2"),
            item3 = $this.data("column3"),
            item4 = $this.data("column4"),
            layout = $this.data("layout"),
            gapH = Number($this.data("gaph")),
            gapV = Number($this.data("gapv"));

            $(this).find('#images-wrap').cubeportfolio({
                layoutMode: layout,
                defaultFilter: '*',
                animationType: 'quicksand',
                gapHorizontal: gapH,
                gapVertical: gapV,
                showNavigation: false,
                showPagination: true,
                gridAdjustment: 'responsive',
                rewindNav: false,
                auto: true,
                mediaQueries: [{
                    width: 1500,
                    cols: item
                }, {
                    width: 1100,
                    cols: item
                }, {
                    width: 800,
                    cols: item2
                }, {
                    width: 550,
                    cols: item3
                }, {
                    width: 320,
                    cols: item4
                }],
                caption: ' ',
                displayType: 'bottomToTop',
                displayTypeSpeed: 100
            });
        });
    };

    var portfoliosRelatedOwl = function() {
        if ( $().owlCarousel ) {
            $('.portfolios-related').each(function(){
                var
                $this = $(this),
                gap = Number($this.data("gap")),
                column = $this.data("column");

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:column
                        }
                    }
                });
            });
        }
    };

    var carouselBoxOwl = function() {
        if ( $().owlCarousel ) {
            $('.themesflat_sc_vc-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                loop = $this.data("loop"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap")),
                speed = Number($this.data("speed"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: loop,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: speed,
                    smartSpeed: 950,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var carouselGalleryBoxOwl = function() {
        if ( $().owlCarousel ) {
            $('.themesflat_sc_vc-carousel-gallery-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                loop = $this.data("loop"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.gallery-carousel').owlCarousel({ 
                    center:true,
                    stagePadding: 20,
                    smartSpeed: 1100,   
                    URLhashListener:true,
                    startPosition: 'URLHash',
                    autoplay: auto,
                    autoplayTimeout: 3500,
                    loop: loop,
                    nav: true,
                    navigation : true,
                    pagination: true,  
                    responsiveClass: true,
                    margin: gap,
                    responsive: {
                        0: {
                            items: item3,
                        },
                        600: {
                            items: item2,
                        },
                        1000: {
                            items: item,
                        }
                    }
                });
            });
        }
    };   

    var portfolioOwl = function() {
        if ( $().owlCarousel ) {
            $('.themesflat_sc_vc-portfolios').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var blogPostsOwl = function() {
        if ( $().owlCarousel ) {
            $('.themesflat_sc_vc-blog-post').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var accordions = function() {
        var args = {easing:'easeOutExpo', duration:600};

        $('.accordion-item.active').find('.accordion-content').show();
        $('.accordion-heading').on('click', function () {
            if ( !$(this).parent().is('.active') ) {
                $(this).parent().toggleClass('active')
                    .children('.accordion-content').slideToggle(args)
                .parent().siblings('.active').removeClass('active')
                    .children('.accordion-content').slideToggle(args);
            } else {
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(args);
            }
        });
    };

    var popupImages = function() {
        if ( $().magnificPopup ) {
            $('.themesflat_sc_vc-portfolios, .portfolios-related, .themesflat_sc_vc-images-grid').each(function () {
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        };
    };

    var spacer = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
                mode = 'mobile';

            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches )
                mode = 'smobile';

            $('.themesflat_sc_vc-spacer').each(function(){
                if ( mode == 'desktop' ) {
                    $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
                } else if ( mode == 'mobile' ) {
                    $(this).attr('style', 'height:' + $(this).data('mobi') + 'px')
                } else {
                    $(this).attr('style', 'height:' + $(this).data('smobi') + 'px')
                }
            })

        });
    };

    var contentBox = function() {
        $(window).on('load resize', function() {
            var mode = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches )
                mode = 'mobile';

            $('.themesflat_sc_vc-content-box').each(function(){
                if ( mode == 'desktop' ) {
                    $(this).css({margin : $(this).data('margin')});
                    $(this).children('.inner').css({padding : $(this).data('padding')});
                } else if ( mode == 'mobile' ) {
                    $(this).css({margin : $(this).data('mobimargin')});
                    $(this).children('.inner').css({padding : $(this).data('mobipadding')});
                }
            })
        });
    };

    var counter = function(){
        function themesflat_sc_vcInview(ele) {
            var window_top = $(window).scrollTop(),
                offset_top = $(ele).offset().top;
            if ( $(ele).length > 0 ) {
                if (    offset_top + $(ele).height() - 100 >= window_top &&
                        offset_top <= ( window_top + 0.85 * $(window).height() ) ) {
                        return true;
                } else {
                    return false;
                }
            }
        }

        function run_animations() {
            var did_scroll = false;
            $(window).on('scroll', function(){
                did_scroll = true;
            });
            setInterval(function () {
                if (did_scroll) {
                    did_scroll = false;

                    $('.themesflat_sc_vc-counter').each(function() {
                        var $this = $(this);

                        if ( themesflat_sc_vcInview($this) && !$this.data('complete') ) {
                            $this.data('complete',true);
                            var delay = parseInt($this.find('.number').data('delay')); 
                            var speed = parseInt($this.find('.number').data('speed'));                                                   
                            setTimeout(function(){
                                $this.find('.number').counterUp({
                                    delay: 25,
                                    time: speed
                                });
                            } );
                        }
                    });
                }
            }, 200);
        }
        run_animations();
    };

    var progressBar = function() {
        if ( $().appear ) {
            var $section = $('.themesflat_sc_vc-progress').appear(function() {
            
            function runBars() {
                var bar = $('.progress-animate');
                var bar_width = $(this);
                $(function(){
                  $(bar).each(function(){
                    bar_width = $(this).attr('data-valuenow');
                    $(this).width(bar_width + '%');

                    $(this).parents('.themesflat_sc_vc-progress').find('.perc').addClass('show').width(bar_width + '%');
                  });
                });
            }

            runBars();
            });
        }
    };

    var animation = function() {
        $('.themesflat_sc_vc-animation-block').each( function() {
            var el = $(this),
            animate = el.data('animate'),
            duration = el.data('duration'),
            delay = el.data('delay'),
            position = el.data('position');

            el.css({
                '-webkit-animation-delay':      delay,
                'animation-delay':              delay,
                '-webkit-animation-duration':   duration,
                'animation-duration':           duration
            });
        
            el.waypoint(function() {
                el.addClass('animated').addClass(animate);
                },{
                    triggerOnce: true,
                    offset: position
            });
        });
    };

    var popup_Images_Videos_Maps = function() {
        if ( $().magnificPopup ) {

            $('.popup-video, .popup-gmaps').magnificPopup({
                fixedContentPos: true,
                closeOnContentClick: true,
                closeBtnInside: false,    
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
              });

            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                image: {
                  verticalFit: true,
                },
            });

            $('.image-popup-gallery').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                image: {
                  verticalFit: true,
                },
                gallery: {
                  tCounter: '',
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }  
            }); 

        };
    };

    var resizeHeading = function() {
        $(window).on('load resize', function() {
            $('.themesflat_sc_vc-sheading, .themesflat_sc_vc-headings').each(function() {
                var
                $this = $(this),
                font = $this.data("font"),
                fontMobi = $this.data("mfont");

                if ( fontMobi ) {
                    if ( $(window).width() < 992 ) {
                        $this.find('.heading').css('font-size', fontMobi + 'px');
                    } else { 
                        $this.find('.heading').css('font-size', font + 'px');
                    }
                }
            });
        });
    };

    var detectViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var advancedSection =  function() {
        $(window).on('load resize', function(){
            var
            adminBarHeight = 0,
            topBarHeight = 0,
            contentTopMargin = 0,
            advsectionHeight = 0,
            customHeight = 0,
            adminBar = $('#wpadminbar'),
            topBar = $('.themesflat-top'),
            adv = $('.adv-section'),
            windowHeight = $(window).height(),
            headerHeight = $('#header').height(),
            advContent = adv.find('.adv-content'),
            contentHeight = advContent.height(),
            spacing = adv.data('content');
            customHeight = adv.data('height');

            if (topBar.length) topBarHeight = topBar.height();
            if (adminBar.length) adminBarHeight = adminBar.height();

            advsectionHeight = windowHeight;
            if ( customHeight )
                advsectionHeight = customHeight;

            if ( $('body').hasClass('header-absolute') ) {
                adv.css({ height: (advsectionHeight - adminBarHeight) + "px" });
                contentTopMargin = ((advsectionHeight - contentHeight) / 2) + topBarHeight + spacing;

                advContent.css("padding-top", (contentTopMargin) + "px");
            } else {
                if ( ! customHeight )
                advsectionHeight = advsectionHeight - headerHeight - topBarHeight - adminBarHeight;
                adv.css({ height: advsectionHeight + "px" });
                contentTopMargin = ((advsectionHeight - contentHeight) / 2) + spacing;
                advContent.css("padding-top", (contentTopMargin) + "px");
            }
            
            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                $('.adv-section').css({ height: "650px" });
                advsectionHeight = $('.adv-section').height();
                contentTopMargin = ((advsectionHeight - contentHeight) / 2) + spacing;
                advContent.css("padding-top", (contentTopMargin) + "px");
            };

            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                $('.adv-section').css({ height: "500px" });
                advsectionHeight = $('.adv-section').height();
                contentTopMargin = ((advsectionHeight - contentHeight) / 2) + spacing;
                advContent.css("padding-top", (contentTopMargin) + "px");
            };
        });

        if ( $().vegas ) {
            $(".adv-section.slideshow").each(function() {
                var
                $this = $(this),
                count = $this.data('count'),
                count = parseInt(count,10),
                effect = $this.data('effect'),
                images = $this.data('image'),
                cOverlay = $this.data('overlay'),
                pOverlay = $this.data('poverlay'),
                i = 0,
                slides = [],
                imgs = images.split('|');

                while ( i < count ) {
                    slides.push( {src:imgs[i]} );
                    i++;
                }

                $this.vegas({
                    slides: slides,
                    overlay: true,
                    transition: effect
                });

                var overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $(this).append(overlay).find('.vegas-overlay').addClass(pOverlay);
            });
        }

        $('.scroll-target').on('click',function() {
            var anchor = $(this).attr('href').split('#')[1];

            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                    var headerHeight = 0;

                    if ( $('body').hasClass('header-sticky') )
                        headerHeight = $('#site-header').height();

                    var target = $('#' + anchor).offset().top - headerHeight;

                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
               }
            }
            return false;
        });

        if ( $().YTPlayer ) {
            $(".adv-section.video").each(function() {
                var
                $this = $(this),
                cOverlay = $this.data('overlay'),
                overlay = $('<div />', {
                    class: 'overlay',
                    style: 'background:' + cOverlay
                });

                $this.append(overlay);
                $(this).mb_YTPlayer();
            });
        }
    };

    var tabs =  function() {
        $('.themesflat_sc_vc-tabs').each(function(){
            var 
            list ="",
            title = $(this).find('.item-title'),
            titleWrap = $(this).children('.tab-title') ; 

            title.each(function() {
                list = list + "<li>" + $(this).html() + "</li>";
            }).appendTo(titleWrap);

            $(this).find('.tab-title li').filter(':first').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':first').show();

            $(this).find('.tab-title li').on('click', function(e) {
                var
                idx = $(this).index(),
                content = $(this).closest('.themesflat_sc_vc-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').siblings().hide();

                e.preventDefault();
            });

        });
    };
    
    var countDown = function() { 
        $('.themesflat_sc_vc-countdown').each(function() {
            var set_time    = $('.countdown').data('date'),
                time_day    = $('.time-day'),
                time_hours  = $('.time-hours'),
                time_mins   = $('.time-mins'),
                time_secs   = $('.time-secs');
            if ($().countdown) {
                $(".countdown").countdown(set_time, function(event) {
                  time_day.html(event.strftime('%D'));
                  time_hours.html(event.strftime('%H'));
                  time_mins.html(event.strftime('%M'));
                  time_secs.html(event.strftime('%S'));
                });
            } 
        }); 
    }
  
    var equalizeHeight = function() {
        $(window).on('load resize', function () {
            setTimeout(function () {
                $(document).imagesLoaded(function () {
                    if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.sm-equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                    }
                });
            }, 500);
        });
    };

    var colorHover = function(iconbox, img_adv_video, img_adv_image, single_bt, dtab, icons){
        /*iconbox*/
        var iconbox = $(iconbox);
        iconbox.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor'),
                color_hover = $(this).find('.icon-wrap').data('color_hover'),
                color = $(this).find('.icon-wrap').data('color'),
                bordercolor_hover = $(this).find('.icon-wrap').data('bordercolor_hover'),
                bordercolor = $(this).find('.icon-wrap').data('bordercolor'),
                buttoncolor_hover = $(this).find('.btn').data('buttoncolor_hover'),
                buttoncolor = $(this).find('.btn').data('buttoncolor'),
                button_bgcolor_hover = $(this).find('.btn').data('button_bgcolor_hover'),
                button_bgcolor = $(this).find('.btn').data('button_bgcolor'),
                button_bordercolor_hover = $(this).find('.btn').data('button_bordercolor_hover'),
                button_bordercolor = $(this).find('.btn').data('button_bordercolor'),

                headingcolor = $(this).find('.heading').data('headingcolor'),
                headingcolor_hover = $(this).find('.heading').data('headingcolor_hover');
            
            //Icon
            $(this).on('mouseenter',function() {
                $(this).find('.icon-wrap').css({'background': bgcolor_hover , 'color': color_hover, 'border-color': bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).find('.icon-wrap').css({'background': bgcolor , 'color': color , 'border-color': bordercolor });                
            });

            //Button
            $(this).find('.btn > a').on('mouseenter',function() {
                $(this).css({'color': buttoncolor_hover, 'background': button_bgcolor_hover, 'border-color': button_bordercolor_hover });
            });
            $(this).find('.btn > a').on('mouseleave',function() {
                $(this).css({'color': buttoncolor , 'background': button_bgcolor , 'border-color': button_bordercolor });
            }); 

            //Heading
            $(this).find('.heading > a').on('mouseenter',function() {
                $(this).css({'color': headingcolor_hover });
            });
            $(this).find('.heading > a').on('mouseleave',function() {
                $(this).css({'color': headingcolor });
            });            
        });

        /*images_advanced_video*/
        var images_advanced_video = $(img_adv_video);         
        images_advanced_video.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor');
            //Icon
            $(this).find('.icon-wrap').on('mouseenter',function() {
                $(this).css({'background': bgcolor_hover });               
            });
            $(this).find('.icon-wrap').on('mouseleave',function() {
                $(this).css({'background': bgcolor });                
            });
        });

        /*images_advanced_image*/
        var images_advanced_image = $(img_adv_image);         
        images_advanced_image.each(function() {
            var bgcolor_hover = $(this).find('.icon-wrap').data('bgcolor_hover'),
                bgcolor = $(this).find('.icon-wrap').data('bgcolor');            
            //Icon
            $(this).find('.icon-wrap').on('mouseenter',function() {
                $(this).css({'background': bgcolor_hover });               
            });
            $(this).find('.icon-wrap').on('mouseleave',function() {
                $(this).css({'background': bgcolor });                
            });
        });

        /*single_button*/
        var single_button = $(single_bt);         
        single_button.each(function() {
            var btn_bgcolor_hover = $(this).data('btn_bgcolor_hover'),
                btn_bgcolor = $(this).data('btn_bgcolor'),
                btn_color_hover = $(this).data('btn_color_hover'),
                btn_color = $(this).data('btn_color'),
                btn_bordercolor_hover = $(this).data('btn_bordercolor_hover'),
                btn_bordercolor = $(this).data('btn_bordercolor');
            //button             
            $(this).on('mouseenter',function() {
                $(this).css({'background': btn_bgcolor_hover, 'color': btn_color_hover, 'border-color': btn_bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).css({'background': btn_bgcolor, 'color': btn_color, 'border-color': btn_bordercolor });                
            });
        });

        /*dtab*/
        var colordtab = $(dtab);        
        colordtab.each(function() {            
            var bgcolorhover = $(this).find('.tab-title').data('bgcolorhover'),
                bgcolor = $(this).find('.tab-title').data('bgcolor'),
                bgcoloractive = $(this).find('.tab-title').data('bgcoloractive'),                
                colorhover = $(this).find('.tab-title').data('colorhover'),
                color = $(this).find('.tab-title').data('color'),
                coloractive = $(this).find('.tab-title').data('coloractive');
                                          
            //title 
            $(this).find('.item-title').css({'background': bgcolor, 'color': color });                       
            $(this).find('.item-title').on('mouseenter',function() {
                $(this).css({'background': bgcolorhover, 'color': colorhover });               
            });
            $(this).find('.item-title').on('mouseleave',function() {
                $(this).css({'background': bgcolor, 'color': color });                
            }); 
            
            $(this).find('.item-title.active').children().css({'color': coloractive });
            $(this).find('.item-title.active').children().css({'background': bgcoloractive });
            $(this).find('.tab-title').on('click',function(e) {
                $(this).find('.item-title').children().css({'color': '' });
                $(this).find('.item-title.active').children().css({'color': coloractive });

                $(this).find('.item-title').children().css({'background': '' });
                $(this).find('.item-title.active').children().css({'background': bgcoloractive }); 
                e.preventDefault();
            });
        }); 

        /*icon*/
        var icon = $(icons);         
        icon.each(function() {
            var bgcolor_hover = $(this).data('bgcolor_hover'),
                bgcolor = $(this).data('bgcolor'),
                color_hover = $(this).data('color_hover'),
                color = $(this).data('color'),
                bordercolor_hover = $(this).data('bordercolor_hover'),
                bordercolor = $(this).data('bordercolor');
            //button             
            $(this).on('mouseenter',function() {
                $(this).find('span.icon').css({'background': bgcolor_hover, 'color': color_hover, 'border-color': bordercolor_hover });               
            });
            $(this).on('mouseleave',function() {
                $(this).find('span.icon').css({'background': bgcolor, 'color': color, 'border-color': bordercolor });                
            });
        });
    };

    var pieChart = function() {
        if ($('.themesflat_sc_vc-piechart .chart').length > 0) {
            var $pieChart = $('.themesflat_sc_vc-piechart .chart');
            $pieChart.each(function () {
            var $elem = $(this),
                  pieChartSize = $elem.attr('data-size') || "120",
                  pieChartAnimate = $elem.attr('data-animate') || "2100",
                  pieChartWidth = $elem.attr('data-width') || "6",
                  pieChartColor = $elem.attr('data-color') || "#2e52c2",
                  pieChartTrackColor = $elem.attr('data-trackcolor') || "rgba(0,0,0,0.1)";
            $elem.find('span, i').css({
                  'width': pieChartSize + 'px',
                  'height': pieChartSize + 'px',
                  'line-height': pieChartSize + 'px'
            });
            $elem.appear(function () {
                $elem.easyPieChart({
                      size: Number(pieChartSize),
                      animate: Number(pieChartAnimate),
                      trackColor: pieChartTrackColor,
                      lineWidth: Number(pieChartWidth),
                      barColor: pieChartColor,
                      scaleColor: false,
                      lineCap: 'round',
                      onStep: function (from, to, percent) {
                          $elem.find('span.percent').text(Math.round(percent));
                      }
                    });
                });
            });
        };
    };    

    // Dom Ready
    $(function() {
        equalizeHeight();
        portfolioCube();
        galleryCube();
        imagesCube();
        portfoliosRelatedOwl();
        accordions();
        popupImages();
        spacer();
        contentBox();
        animation();
        popup_Images_Videos_Maps();
        resizeHeading();
        advancedSection();
        tabs();
        countDown();
        progressBar();
        counter(); 
        colorHover('.themesflat_sc_vc-icon-box','.themesflat_sc_vc-image-video','.themesflat_sc_vc-single-image','.themesflat_sc_vc-button','.themesflat_sc_vc-tabs','.themesflat_sc_vc-icon');   
        pieChart(); 
        $( window ).load(function() {
            galleryJustified();
            carouselBoxOwl();
            carouselGalleryBoxOwl();
            blogPostsOwl();
            portfolioOwl();
            detectViewport();
        });
    });

})(jQuery);
