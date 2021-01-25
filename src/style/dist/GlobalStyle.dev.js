"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ImageText = exports.Description = exports.SubTitle = exports.Content = exports.Gallery = exports.News = exports.Featured = exports.Title = exports.size = exports.fadeOut = exports.fadeIn = exports.colors = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  html {\n    font-size: 16px;\n  }\n  body {\n    ", "\n    font-size: 16px;\n    line-height: 1.5;\n    padding: 0;\n    margin: 0;\n    min-height: 100vh;\n    position: relative;\n    background: var(--background);\n    a {\n      color: var(--text);\n    }\n  }\n  * {\n    box-sizing: boreder-box;\n    margin: 0;\n    padding: 0;\n\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 400;\n  }\n  *:before, *:after {\n    box-sizing: border-box;\n  }\n  input, button, textarea, button, select {\n    ", "\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: none;\n    outline: none;\n    background: none;\n    line-height: 1.5;\n    font-size: 16px;\n    -webkit-appearance: none;\n    &:focus {\n      border: none;\n      outline: none;\n    }\n  }\n  ::selection {\n    background: rgba(255, 250, 118, 0.35);\n  }\n\n  /* ===============================================\n  # smart phone\n  =============================================== */\n  @media screen and (max-width: 780px) {\n    html, body {\n      font-size: 15px;\n    }\n    .pc {\n      display: none !important;\n    }\n  }\n\n  /* ===============================================\n  # pc\n  =============================================== */\n  @media screen and (min-width: 781px) {\n    .sp {\n      display: none !important;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: -apple-system, system-ui, \"Helvetica Neue\", \"Segoe UI\",\n    \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", Arial,\n    \u30E1\u30A4\u30EA\u30AA, Meiryo, sans-serif;\n  word-wrap: break-word;\n  word-break: break-all;\n  -moz-font-feature-settings: \"palt\";\n  -webkit-font-feature-settings: \"palt\";\n  font-feature-settings: \"palt\";\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: auto;\n  -webkit-text-stroke: 1px transparent;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  letter-spacing: 0.05rem;\n  font-weight: 400;\n  color: var(--text);\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    :root {\n      ", "\n      --width: ", ";\n      --topHeight: ", ";\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n font-size:", ";\n     position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto auto 10%;\n    display: flex;\n\n    flex-direction: column;\n    justify-content: center;\n    text-align:", " ;\n    color: #fff;\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;;\n\n font-weight:bold;\n line-height: 2em;\n padding:30px 0 30px;\n width:", ";\n  font-size:", ";\n margin:0 auto;\n /* margin:", "; */\n @media(max-width:767px){\n  width:80%;\n }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;;\n font-weight: bold;\n margin-bottom:0px;\n text-align:center;\n font-size:2.5rem;\n padding:30px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n margin:100px;\n text-align:center;\n font-size:3.5rem;\n\n   @media(max-width:768px){\n     margin:50px;\n    font-size:2.5rem;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n margin:0 5% 0;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n background: #eee;\n text-align:center;\n margin:0 auto;\n padding-bottom:30px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin:0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n     position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto auto 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-10px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {};
exports.colors = colors;
colors.background = "#fffeff";
colors.text = "#617e8c";
colors.paleGray = "#f9f9f9";
colors.lightGray = "#ddd";
colors.gray = "#96acb3";
colors.primaryPurple = "#9E69D7";
colors.primary = "#FA96BB";
colors.primaryLight = (0, _polished.rgba)("#FA96BB", 0.15);
colors.primaryPale = (0, _polished.rgba)("#FA96BB", 0.07);
colors.secondary = "#FFB238";
colors.danger = "#FF5C55";
colors.success = "#4FCE7A";
colors.warn = "#feaa2e";
colors.info = "#2490eb";
/* ===============================================
#  other variables
=============================================== */

var fadeIn = (0, _styledComponents.keyframes)(_templateObject());
exports.fadeIn = fadeIn;
var fadeOut = (0, _styledComponents.keyframes)(_templateObject2());
exports.fadeOut = fadeOut;
var size = {
  width: "800px",
  topHeight: "370px"
};
exports.size = size;

var Title = _styledComponents["default"].h1(_templateObject3()); // export const TwoColumn = styled.h1 `
//   display: grid;
//   grid-gap:50px;
//   margin:0 150px 0;
//   grid-template-columns:1fr 1fr;
//   >div{
//    margin:40px;
//   }
//   >div:last-child{
//    text-align:center;
//   }
//   @media(max-width:1024px){
//     margin:10px;
//     grid-gap:10px;
//     grid-template-columns:1fr;
//      >div{
//    margin:5x;
//   }
//   }
// `


exports.Title = Title;

var Featured = _styledComponents["default"].section(_templateObject4());

exports.Featured = Featured;

var News = _styledComponents["default"].section(_templateObject5());

exports.News = News;

var Gallery = _styledComponents["default"].div(_templateObject6());

exports.Gallery = Gallery;

var Content = _styledComponents["default"].h1(_templateObject7());

exports.Content = Content;

var SubTitle = _styledComponents["default"].div(_templateObject8());

exports.SubTitle = SubTitle;

var Description = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.space && "60%";
}, function (props) {
  return props.large ? "1.1rem" : "1rem";
}, function (props) {
  return props.both && "0 10px 0 10px";
});

exports.Description = Description;

var ImageText = _styledComponents["default"].div(_templateObject10(), function (props) {
  return props.large ? "1.4rem" : "3.5rem";
}, function (props) {
  return props.left ? "left" : "center";
});
/* ===============================================
#  set css variables
=============================================== */


exports.ImageText = ImageText;

function setColor() {
  var styles = "";

  for (var key in colors) {
    styles += "--".concat(key, ": ").concat(colors[key], ";");
  }

  return (0, _styledComponents.css)(_templateObject11(), styles, size.width, size.topHeight);
}
/* ===============================================
#  font setting
=============================================== */


var font = (0, _styledComponents.css)(_templateObject12());
/* ===============================================
#  global style
=============================================== */

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject13(), setColor, font, font);
var _default = GlobalStyle;
exports["default"] = _default;