this.Disney=this.Disney||{},function(e){"use strict";var n=e.Disney,t=e.document,o=e.decodeURIComponent,r=e.encodeURIComponent,i=/\s*([^=;]+)=?([^;]*);?/g,a=/(?:^|.)([a-z0-9\-]+(?:\.com?)?\.[a-z\-]+)$/,c=n.Cookie={enabled:function(){return e.navigator.cookieEnabled||"cookie"in t&&(t.cookie.length>0||(t.cookie=t.cookie.indexOf("cookietest")>-1))},get:function(e,n){return c.all(n)[e]},all:function(e){for(var n,r,a={},c=t.cookie||"",u=e&&e.raw;n=i.exec(c);)r=n[2],a[o(n[1])]=u?r:o(r);return a},set:function(e,n,o){o=o||{};var i,a=o.expires;null===n&&(n="",a=-1),"number"==typeof a&&(i=a,a=new Date,a.setDate(a.getDate()+i)),a&&a.toUTCString&&(a=a.toUTCString()),t.cookie=[r(e),"=",o.raw?n:r(n),a?"; expires="+a:"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")},remove:function(e,n){c.set(e,null,n)},domain:function(n){return n=n||e.location.hostname,"."+(a.exec(n)||[n,n])[1]}}}(this),function(e){"use strict";function n(){return o?o.get("SWID")||void 0:void 0}var t=e.Disney,o=t.Cookie;t.usrid=n}(this),function(e){"use strict";function n(e,n){var r,i="number"==typeof e,a="string"==typeof n,c=100;if(!i)throw new TypeError("Percent is not a Number");if(0>e||e>100)throw new RangeError("Invalid Percentage: must be between 0..100");if(n&&!a)throw new TypeError("Invalid UUID");return n&&(r=n.replace(/[^\/\w]|_/g,"").substr(n.length-10),r=parseInt(r,16)),r/c>c?t(r,c,e):t(o(Math.pow(c,2)),c,e)}function t(e,n,t){var o=e%n;return t>=o}function o(e){return Math.floor(Math.random()*e)}var r=e.Disney;r.Sample=n}(this);