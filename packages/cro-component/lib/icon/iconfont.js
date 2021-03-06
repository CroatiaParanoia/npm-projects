"use strict";

!function (d) {
  var e,
      s = '<svg><symbol id="icon-radioactive" viewBox="0 0 1024 1024"><path d="M512 810.667c-164.693 0-298.667-134.016-298.667-298.667s133.973-298.667 298.667-298.667c164.651 0 298.667 134.016 298.667 298.667s-134.016 298.667-298.667 298.667zM512 253.184c-142.72 0-258.859 116.096-258.859 258.816s116.139 258.816 258.859 258.816c142.763 0 258.816-116.181 258.816-258.816 0-142.763-116.053-258.816-258.816-258.816z"  ></path><path d="M682.667 512c0 94.257-76.41 170.667-170.667 170.667s-170.667-76.41-170.667-170.667c0-94.257 76.41-170.667 170.667-170.667s170.667 76.41 170.667 170.667z"  ></path></symbol><symbol id="icon-checkboxoutlineblank" viewBox="0 0 1024 1024"><path d="M810.666667 213.333333l0 597.333333L213.333333 810.666667 213.333333 213.333333 810.666667 213.333333M810.666667 128 213.333333 128C166.4 128 128 166.4 128 213.333333l0 597.333333c0 46.933333 38.4 85.333333 85.333333 85.333333l597.333333 0c46.933333 0 85.333333-38.4 85.333333-85.333333L896 213.333333C896 166.4 857.6 128 810.666667 128L810.666667 128z"  ></path></symbol><symbol id="icon-radio" viewBox="0 0 1024 1024"><path d="M512 810.667c-164.693 0-298.667-134.016-298.667-298.667s133.973-298.667 298.667-298.667c164.651 0 298.667 134.016 298.667 298.667s-134.016 298.667-298.667 298.667zM512 253.184c-142.72 0-258.859 116.096-258.859 258.816s116.139 258.816 258.859 258.816c142.763 0 258.816-116.181 258.816-258.816 0-142.763-116.053-258.816-258.816-258.816z"  ></path></symbol><symbol id="icon-check-box" viewBox="0 0 1024 1024"><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-384 597.333333l-213.333334-213.333333 59.733334-59.733333 153.6 153.6 324.266666-324.266667L810.666667 341.333333l-384 384z"  ></path></symbol></svg>',
      t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");

  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  !function (e) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);else {
        var t = function t() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };

        document.addEventListener("DOMContentLoaded", t, !1);
      }
    } else document.attachEvent && (o = e, c = d.document, i = !1, (_s = function s() {
      try {
        c.documentElement.doScroll("left");
      } catch (e) {
        return void setTimeout(_s, 50);
      }

      n();
    })(), c.onreadystatechange = function () {
      "complete" == c.readyState && (c.onreadystatechange = null, n());
    });

    function n() {
      i || (i = !0, o());
    }

    var o, c, i, _s;
  }(function () {
    var e, t, n, o, c, i;
    (e = document.createElement("div")).innerHTML = s, s = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n = t, (o = document.body).firstChild ? (c = n, (i = o.firstChild).parentNode.insertBefore(c, i)) : o.appendChild(n));
  });
}(window);