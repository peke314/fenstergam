if(typeof jQuery === 'undefined'){
    document.write(unescape("%3Cscript src='js/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
}

$(document).ready(function($) {

	// ******** ANIMATION ON CLICK

	$('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop(true, true).animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

	// ******** OPEN MENU ON MOBILE

    // $('#burger').click(function() {
    //     $('#burger').toggleClass('active');
    //     $('nav').toggleClass('menu-active');

    // });
    // $('.menu-item').click(function() {
    //     $('#burger').removeClass('active');
    //     $('nav').removeClass('menu-active');
    // });
    

    // ******** Object fit fix for IE or EDGE

    $(function () {
        objectFitImages()
    });


});

// ******** MENU SHRINK ON SCROLL

// function shrink() {
//     window.addEventListener('scroll', function(e){
//         var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//             shrinkOn = 300;
//         if (distanceY > shrinkOn) {
//             $('header').addClass('header_shrink');
//             $('#burger').removeClass('active');
// 	        $('nav').removeClass('menu-active');
//         } else {
//         	$('header').removeClass('header_shrink');

//         }
//     });
// }

// ******** CHANGE MENU ITEM .active ON SCROLL, ALSO INCLUDES shrink();

// $(window).scroll(function() {
//     var scrollPos = $(document).scrollTop();
//     shrink();
//     $('.menu-item').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top-100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.menu-item').removeClass("sub_active");
//             currLink.addClass("sub_active");
//         }
//         else{
//             currLink.removeClass("sub_active");
//         }
//     });
// });
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.




/*! npm.im/object-fit-images */
var objectFitImages = function () {
    "use strict";
    function t(t) {
        for (var e, r = getComputedStyle(t).fontFamily, i = {}; null !== (e = c.exec(r)); )
            i[e[1]] = e[2];
        return i
    }
    function e(e, i) {
        if (!e[n].parsingSrcset) {
            var s = t(e);
            if (s["object-fit"] = s["object-fit"] || "fill", !e[n].s) {
                if ("fill" === s["object-fit"])
                    return;
                if (!e[n].skipTest && l && !s["object-position"])
                    return
            }
            var c = e[n].ios7src || e.currentSrc || e.src;
            if (i)
                c = i;
            else if (e.srcset && !u && window.picturefill) {
                var o = window.picturefill._;
                e[n].parsingSrcset = !0, e[o.ns] && e[o.ns].evaled || o.fillImg(e, {reselect: !0}), e[o.ns].curSrc || (e[o.ns].supported = !1, o.fillImg(e, {reselect: !0})), delete e[n].parsingSrcset, c = e[o.ns].curSrc || c
            }
            if (e[n].s)
                e[n].s = c, i && (e[n].srcAttr = i);
            else {
                e[n] = {s: c, srcAttr: i || f.call(e, "src"), srcsetAttr: e.srcset}, e.src = n;
                try {
                    e.srcset && (e.srcset = "", Object.defineProperty(e, "srcset", {value: e[n].srcsetAttr})), r(e)
                } catch (t) {
                    e[n].ios7src = c
                }
            }
            e.style.backgroundImage = 'url("' + c + '")', e.style.backgroundPosition = s["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", /scale-down/.test(s["object-fit"]) ? (e[n].i || (e[n].i = new Image, e[n].i.src = c), function t() {
                return e[n].i.naturalWidth ? void(e[n].i.naturalWidth > e.width || e[n].i.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto") : void setTimeout(t, 100)
            }()) : e.style.backgroundSize = s["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }
    function r(t) {
        var r = {get: function () {
                return t[n].s
            }, set: function (r) {
                return delete t[n].i, e(t, r), r
            }};
        Object.defineProperty(t, "src", r), Object.defineProperty(t, "currentSrc", {get: r.get})
    }
    function i() {
        a || (HTMLImageElement.prototype.getAttribute = function (t) {
            return!this[n] || "src" !== t && "srcset" !== t ? f.call(this, t) : this[n][t + "Attr"]
        }, HTMLImageElement.prototype.setAttribute = function (t, e) {
            !this[n] || "src" !== t && "srcset" !== t ? g.call(this, t, e) : this["src" === t ? "src" : t + "Attr"] = String(e)
        })
    }
    function s(t, r) {
        var i = !A && !t;
        if (r = r || {}, t = t || "img", a && !r.skipTest)
            return!1;
        "string" == typeof t ? t = document.querySelectorAll("img") : "length"in t || (t = [t]);
        for (var c = 0; c < t.length; c++)
            t[c][n] = t[c][n] || r, e(t[c]);
        i && (document.body.addEventListener("load", function (t) {
            "IMG" === t.target.tagName && s(t.target, {skipTest: r.skipTest})
        }, !0), A = !0, t = "img"), r.watchMQ && window.addEventListener("resize", s.bind(null, t, {skipTest: r.skipTest}))
    }
    var n = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", c = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g, o = new Image, l = "object-fit"in o.style, a = "object-position"in o.style, u = "string" == typeof o.currentSrc, f = o.getAttribute, g = o.setAttribute, A = !1;
    return s.supportsObjectFit = l, s.supportsObjectPosition = a, i(), s
}();


