/* Template: Pavo Mobile App Website Tailwind CSS HTML Template
   Description: Custom JS file
*/

(function ($) {
    "use strict";

    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function () {
        if ($(".navbar").offset()?.top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // close menu on click in small viewport
    $('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);

    /* Back To Top Button */
    /* TODO: change this to use Intersection Observer API */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $('a.back-to-top')?.fadeIn('500');
        } else {
            $('a.back-to-top')?.fadeOut('500');
        }
    });


    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function () {
        $(this).blur();
    });

    /* Function to get the navigation links for smooth page scroll */
    function getMenuItems() {
        const menuItems = [];
        $('.nav-link').each(function () {
            const hash = $(this).attr('href').substr(1);
            if (hash !== "")
                menuItems.push(hash);
        })
        return menuItems;
    }

    /* Prevents adding of # at the end of URL on click of non-pagescroll links */
    $('.nav-link').click(function (e) {
        var hash = $(this).attr('href').substr(1);
        if (hash == "")
            e.preventDefault();
    });

    /* Checks page scroll offset and changes active link on page load */
    changeActive();

    /* Change active link on scroll */
    $(document).scroll(function () {
        changeActive();
    });

    /** 
     * Fix this problem using  Intersection_Observer_API
     * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API 
     * */
    /* Function to change the active link */
    function changeActive() {
        const menuItems = getMenuItems();
        $.each(menuItems, function (_, value) {
            const offsetSection = $('#' + value)?.offset()?.top;
            const docScroll = $(document).scrollTop();
            const docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.nav-link')?.removeClass('active');
                $('.nav-link[href$="#' + value + '"]')?.addClass('active');
            }
        });
    }

})(jQuery);

