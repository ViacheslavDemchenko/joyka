"use strict";

;

(function () {
  var accordItems = document.querySelectorAll('.accordion__item-title'),
      active = document.getElementsByClassName('accordion__item-title--active');
  Array.from(accordItems).forEach(function (item) {
    item.addEventListener('click', function () {
      if (active.length > 0 && active[0] !== this) active[0].classList.remove('accordion__item-title--active');
      this.classList.toggle('accordion__item-title--active');
    });
  });
})();
"use strict";

;

(function () {
  var additionalSwiper = new Swiper('.fourth-row--additional', {
    speed: 200,
    slidesPerView: 5,
    loopedSlides: 5,
    loop: true,
    spaceBetween: 16,
    slidesOffsetBefore: 25,
    loopAdditionalSlides: 5,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesOffsetBefore: -20,
        centeredSlides: true
      },
      375: {
        slidesPerView: 2,
        slidesOffsetBefore: -25,
        centeredSlides: true
      },
      425: {
        slidesPerView: 2,
        slidesOffsetBefore: -35,
        centeredSlides: true
      },
      560: {
        slidesPerView: 3,
        slidesOffsetBefore: 70,
        centeredSlides: true
      },
      768: {
        slidesPerView: 3,
        slidesOffsetBefore: -10,
        centeredSlides: true
      },
      1024: {
        slidesPerView: 4,
        slidesOffsetBefore: -70,
        centeredSlides: true
      },
      1366: {
        slidesPerView: 5,
        slidesOffsetBefore: 110
      },
      1920: {
        slidesPerView: 5,
        slidesOffsetBefore: 50
      }
    }
  });
  var screenWidth = window.screen.availWidth;

  if (screenWidth >= 1366) {
    additionalSwiper.destroy(true, true);
  }
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var menu = document.querySelector('.nav');
  var menuLinks = document.querySelectorAll('.nav__link');
  var body = document.getElementsByTagName('body')[0];
  var screenWidth = window.screen.availWidth;
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuHide();
      });
    });
  }

  mobileMenuLinkClick();

  function mobileMenu() {
    window.addEventListener('resize', function () {
      screenWidth = window.screen.availWidth;
      hamburger.classList.remove('active');
      menu.classList.remove('nav-list--open');
      body.classList.remove('no-scroll');
    });

    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      menu.classList.add('nav-list--open');
      body.classList.add('no-scroll');
    } else {
      hamburger.classList.remove('active');
      menu.classList.remove('nav-list--open');
      body.classList.remove('no-scroll');
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('nav-list--open');
    body.classList.remove('no-scroll');
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      hamburger.classList.remove('active');
      nav.classList.remove('nav--open');
      body.classList.remove('no-scroll');
    }
  });
})();
"use strict";

;

(function () {
  var reviewsSwiper = new Swiper('.reviews', {
    speed: 400,
    slidesPerView: 6,
    loopedSlides: 6,
    loop: true,
    freeMode: true,
    spaceBetween: 39,
    slidesOffsetBefore: 165,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesOffsetBefore: 0
      },
      560: {
        slidesPerView: 2,
        slidesOffsetBefore: 200
      },
      1024: {
        slidesPerView: 3,
        slidesOffsetBefore: 190
      },
      1366: {
        slidesPerView: 4,
        slidesOffsetBefore: 190
      },
      1920: {
        slidesPerView: 6,
        slidesOffsetBefore: 165
      }
    }
  });
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();