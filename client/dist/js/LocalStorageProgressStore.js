!function(o){function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return o[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=o,t.c=e,t.i=function(o){return o},t.d=function(o,e,n){t.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},t.p="",t(t.s="./client/src/bundles/LocalStorageProgressStore.js")}({"./client/src/bundles/LocalStorageProgressStore.js":function(o,t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};e("./node_modules/nodelist-foreach-polyfill/index.js");var r=function(o){return JSON.parse(atob(decodeURIComponent(o)))},i=function(o){var t=window.location.search.substring(1),e=t.split("&"),n=!1;return e.forEach(function(t){var e=t.split("=");e[0]===o&&(n=e[1])}),n},s=function(o){if(!o)return!1;var t=r(o);return"object"!==(void 0===t?"undefined":n(t))?(console.warn("Unexpected value supplied for decoding progress"),!1):t},c=function(){var o=i("progress"),t=window.localStorage.getItem("PathfinderProgress");if(o){var e=s(o),n=s(t);if(!n||e.timestamp>=n.timestamp)return void window.localStorage.setItem("PathfinderProgress",o)}if(t){var r=window.location,c=[];r.search.substring(1).split("&").forEach(function(o){o.length&&"progress"!==o.split("=")[0]&&c.push(o)}),c.push("progress="+t),window.location=[r.origin,r.pathname,"?",c.join("&")].join("")}};window.addEventListener("load",function(){c()})},"./node_modules/nodelist-foreach-polyfill/index.js":function(o,t){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(o,t){t=t||window;for(var e=0;e<this.length;e++)o.call(t,this[e],e,this)})}});