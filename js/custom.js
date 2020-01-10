/* -------------------------------------------------------------------------------

    Custom JS

    0.  Clear Form Inputs
    1.  Main Navigation
    2.  Main Slider
    3.  Image Slider
    4.  Project Carousel & Blog Carousel
    5.  Project Carousel (Alt. Version)
    6.  Responsive Video
    7.  Black & White Hover Effect
    8.  Accordion
    9.  Tabs
    10. Isotope
    11. Contact Form
    12. Fancybox
    13. Back to Top
    14. Twitter Feed
    15. Flickr Feed
    16. Google Maps

---------------------------------------------------------------------------------- */



$(document).ready(function() {



    /* --------------------------------------------------------------------------- */
    /*  0.  Clear Form Inputs
    /* --------------------------------------------------------------------------- */

    $('input, textarea').bind('focusin', function() { if($(this).val() == $(this).attr('default-value')) { $(this).val(''); } });
    $('input, textarea').bind('focusout', function() { if($(this).val() == '') { $(this).val( $(this).attr('default-value') ); } });




    /* --------------------------------------------------------------------------- */
    /*  1.  Main Navigation
    /* --------------------------------------------------------------------------- */

    var $navigation    = $('#navigation');
    
    // Regular nav
    $navigation.on('mouseenter', 'li', function() {
        var $this    = $(this),
            $subMenu = $this.children('ul');
        if( $subMenu.length ) $this.addClass('hover');
        $subMenu.hide().stop(true, true).fadeIn(150);
    }).on('mouseleave', 'li', function() {
        $(this).removeClass('hover').children('ul').stop(true, true).fadeOut(70);
    });

    // Responsive nav
    selectnav('navigation', {
        label: 'NAVIGATE...',
        autoselect: false,
        nested: true,
        indent: '–-'
    });





    /* --------------------------------------------------------------------------- */
    /*  2.  Main Slider
    /* --------------------------------------------------------------------------- */

    $('#main-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "fade",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : true,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : true,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });





    /* --------------------------------------------------------------------------- */
    /*  3.  Image Slider
    /* --------------------------------------------------------------------------- */

    $('.image-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "slide",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : false,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : false,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });





    /* --------------------------------------------------------------------------- */
    /*  4.  Project Carousel & Blog Carousel
    /* --------------------------------------------------------------------------- */

    var $carousel = $('#project-wrapper, #blog-wrapper');


    // Project Carousel external controls
    function projectCarousel_initCallback( carousel ) {
        $('.jcarousel-control a').bind('click', function() { carousel.scroll(jcarousel.intval((this).text())); return false; });
        $('#project-next').bind('click', function() { carousel.next(); return false; });
        $('#project-prev').bind('click', function() { carousel.prev(); return false; });
    };
    $("#project-wrapper").jcarousel( {
        initCallback   : projectCarousel_initCallback,
        buttonNextHTML : null,
        buttonPrevHTML : null
    });


    // Blog Carousel external controls
    function blogCarousel_initCallback( carousel ) {
        $('.jcarousel-control a').bind('click', function() { carousel.scroll(jcarousel.intval((this).text())); return false; });
        $('#blog-next').bind('click', function() { carousel.next(); return false; });
        $('#blog-prev').bind('click', function() { carousel.prev(); return false; });
    };
    $("#blog-wrapper").jcarousel( {
        initCallback   : blogCarousel_initCallback,
        buttonNextHTML : null,
        buttonPrevHTML : null
    });


    if( $carousel.length ) {
        var scrollCount;

        function getWindowWidth() {
            if( $(window).width() < 480 ) {
                scrollCount = 1;
            } else if( $(window).width() < 768 ) {
                scrollCount = 1;
            } else if( $(window).width() < 960 ) {
                scrollCount = 2;
            } else {
                scrollCount = 3;
            }
        }

        function initCarousel( carousels ) {
            carousels.each(function() {
                var $this  = $(this);
                $this.jcarousel({
                    animation     : 600,
                    easing        : 'easeOutCubic',
                    scroll        : scrollCount
                });

            });
        }

        function adjustCarousel() {
            $carousel.each(function() {
                var $this    = $(this),
                    $lis     = $this.children('li')
                    newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;
                getWindowWidth();

                if( $this.width() !== newWidth ) {
                    $this.css('width', newWidth )
                         .data('resize','true');
                    initCarousel( $this );
                    $this.jcarousel('scroll', 1);
                    var timer = window.setTimeout( function() {
                        window.clearTimeout( timer );
                        $this.data('resize', null);
                    }, 600 );
                }
            });
        }

        getWindowWidth();
        initCarousel( $carousel );

        // Window resize
        $(window).on('resize', function() {
            var timer = window.setTimeout( function() {
                window.clearTimeout( timer );
                adjustCarousel();
            }, 30 );
        });
    }





    /* --------------------------------------------------------------------------- */
    /*  5.  Project Carousel (Alt. Version)
    /* --------------------------------------------------------------------------- */

    var $carouselAlt = $('#project-wrapper-alt');

    if( $carouselAlt.length ) {
        var scrollCount;

        function getWindowWidth() {
            if( $(window).width() < 480 ) {
                scrollCount = 1;
            } else if( $(window).width() < 768 ) {
                scrollCount = 2;
            } else if( $(window).width() < 960 ) {
                scrollCount = 3;
            } else {
                scrollCount = 4;
            }
        }

        function initCarousel( carousels ) {
            carousels.each(function() {
                var $this  = $(this);
                $this.jcarousel({
                    animation     : 600,
                    easing        : 'easeOutCubic',
                    scroll        : scrollCount
                });
            });
        }

        function adjustCarousel() {
            $carouselAlt.each(function() {
                var $this    = $(this),
                    $lis     = $this.children('li')
                    newWidth = $lis.length * $lis.first().outerWidth( true ) + 100;
                getWindowWidth();

                if( $this.width() !== newWidth ) {
                    $this.css('width', newWidth )
                         .data('resize','true');
                    initCarousel( $this );
                    $this.jcarousel('scroll', 1);
                    var timer = window.setTimeout( function() {
                        window.clearTimeout( timer );
                        $this.data('resize', null);
                    }, 600 );
                }
            });
        }

        getWindowWidth();
        initCarousel( $carouselAlt );

        // Window resize
        $(window).on('resize', function() {
            var timer = window.setTimeout( function() {
                window.clearTimeout( timer );
                adjustCarousel();
            }, 30 );
        });
    }





    /* --------------------------------------------------------------------------- */
    /*  6.  Responsive Video
    /* --------------------------------------------------------------------------- */
    
    $(window).load(function(){
        $("#content").fitVids();
    });





    /* --------------------------------------------------------------------------- */
    /*  7.  Black & White Hover Effect
    /* --------------------------------------------------------------------------- */

    $('.bw-wrapper').BlackAndWhite( {
        hoverEffect : true, // default true
        speed : { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200,
            fadeOut: 200
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  8.  Accordion
    /* --------------------------------------------------------------------------- */

    $(".accordion").accordion( {
        collapsible: true,
        autoHeight: false
    });





    /* --------------------------------------------------------------------------- */
    /*  9.  Tabs
    /* --------------------------------------------------------------------------- */

    $(".tabs").tabs( {
        fx: { 
            opacity: 'toggle',
            duration:'fast'
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  10. Isotope
    /* --------------------------------------------------------------------------- */

    var $container          = $('.project-feed');
    var $filter             = $('.project-feed-filter');

    $(window).load(function(){
        // Initialize isotope 
        $container.isotope({
            filter              : '*',
            layoutMode          : 'fitRows',
            animationOptions    : {
            duration            : 750,
            easing              : 'linear'
            }
        }); 
    });

    // Filter items when filter link is clicked
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('current');
        $(this).addClass('current');
        $container.isotope({ 
            filter             : selector,
            animationOptions   : {
            animationDuration  : 750,
            easing             : 'linear',
            queue              : false,
            }
        });
        return false;
    });





    /* --------------------------------------------------------------------------- */
    /*  11. Contact Form
    /* --------------------------------------------------------------------------- */

    var $contactform  = $('#comments-form'),
        $success      = '<strong>تم بنجاح !</strong>تم إرسال رسالتك بنجاح';

    // Send the email
    $contactform.submit(function(){
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function(msg) {
                if (msg == 'SEND') {
                    response = '<div class="success">'+ $success +'<strong>تم بنجاح !</strong>تم إرسال رسالتك بنجاح</div>';
                }
                else {
                    response = '<div class="error">'+ msg +' <strong> للأسف! </strong>لم يتم إرسال رسالتك</div>';
                }
                $(".error,.success").remove();
                $contactform.prepend(response);
            }
         });
        return false;
    });





    /* --------------------------------------------------------------------------- */
    /*  12. Fancybox
    /* --------------------------------------------------------------------------- */

    $(".folio").fancybox({
        closeBtn        : false,
        padding         : 0,
        openEffect      : 'elastic',
        closeEffect     : 'elastic',
        nextEffect      : 'elastic',
        prevEffect      : 'elastic',
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(51, 51, 51, 0.8)'
                }
            },
            title : {
                type : 'over'
            }
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  13. Back to Top
    /* --------------------------------------------------------------------------- */

    $("#back-top").hide();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });




    /* --------------------------------------------------------------------------- */
    /*  14. Twitter Feed
    /* --------------------------------------------------------------------------- */

    $('#twitter-feed-footer').jTweetsAnywhere({
        username: 'envato',
        count: 2,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });

    $('#twitter-feed-sidebar').jTweetsAnywhere({
        username: 'envato',
        count: 2,
        showTweetFeed: {
            showProfileImages: false,
            showUserScreenNames: false,
            showUserFullNames: false,
            showInReplyTo: false,
            showActionReply: false,
            showActionRetweet: false,
            showActionFavorite: false
        }
    });





    /* --------------------------------------------------------------------------- */
    /*  15. Flickr Feed
    /* --------------------------------------------------------------------------- */

    $('.photo-stream').flickrfeed('85381447@N08','', {
        limit: 8,
        title: false,
        date: false
    });





});





/* --------------------------------------------------------------------------- */
/*  16. Google Maps
/* --------------------------------------------------------------------------- */

function initGmap() {
    // Create an array of styles.
    var styles = [
        {
            stylers: [
                { saturation: -1200 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "مذهل !! .. قالب أعمالي يستطيع تحديد المكان التي ستجدني فيه لخدمتك"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var $latlng = new google.maps.LatLng(33.533333,-7.583333),
        $mapOptions = {
            zoom                    : 8,
            center                  : $latlng,
            panControl              : true,
            zoomControl             : true,
            scaleControl            : true,
            mapTypeControl          : true,
            mapTypeControlOptions   : {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
    };
    var map = new google.maps.Map(document.getElementById('google-map'), $mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var marker = new google.maps.Marker({
        position: $latlng,
        map: map, 
        title: ""
    });
}



