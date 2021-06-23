"use strict";
exports.__esModule = true;
exports.AfternoonOk = exports.Event = exports.Caution = exports.Forbidden = void 0;
exports.Forbidden = function (date) {
    return "\u203B" + date + "\u306F\u53EA\u4ECA\u6DF7\u3093\u3067\u3044\u308B\u70BA\u3001\u73FE\u5728\u4E88\u7D04\u3092\u7DE0\u3081\u5207\u3063\u3066\u3044\u307E\u3059\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002";
};
exports.Caution = function (date) {
    return "\u203B" + date + "\u306F\u53EA\u4ECA\u6DF7\u3093\u3067\u3044\u308B\u70BA\u3001\u304A\u96FB\u8A71\u3067\u3054\u78BA\u8A8D\u3054\u4E88\u7D04\u304F\u3060\u3055\u3044\u3002";
};
exports.Event = function (date) {
    return "\u203B" + date + "\u306F\u30A4\u30D9\u30F3\u30C8\u51FA\u5F35\u306E\u70BA\u3001\u30AC\u30E9\u30B9\u5439\u4F53\u9A13\u304C\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u4ED6\u306E\u65E5\u3092\u3054\u691C\u8A0E\u304F\u3060\u3055\u3044\u307E\u305B\u3002";
};
exports.AfternoonOk = function () {
    return "\u203B\uFF17\u6708\u306F\u7E41\u5FD9\u671F\u306E\u70BA\u3001\u5E73\u65E5\u306E\u3054\u4E88\u7D04\u306F\u300C\u5348\u5F8C\u306E\u307F\u300D\u3068\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002";
};
