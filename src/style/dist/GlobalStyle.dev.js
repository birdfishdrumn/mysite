"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaddingM = exports.PaddingS = exports.SpaceL = exports.SpaceM = exports.SpaceS = exports.Figure = exports.Content = exports.Gallery = exports.News = exports.Featured = exports.GridList = exports.TwoColumn = exports.MinTitle = exports.ImageText = exports.Description = exports.SubTitle = exports.Nav = exports.Title = exports.size = exports.fadeOut = exports.fadeIn = exports.colors = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _gatsby = _interopRequireDefault(require("gatsby"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  html {\n    font-size: 16px;\n  }\n  body {\n    ", "\n    font-size: 16px;\n    line-height: 1.5;\n    padding: 0;\n    margin: 0;\n    min-height: 100vh;\n    position: relative;\n    background: var(--background);\n    a {\n      color: var(--text);\n    }\n  }\n  * {\n    box-sizing: boreder-box;\n    margin: 0;\n    padding: 0;\n\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 400;\n  }\n  *:before, *:after {\n    box-sizing: border-box;\n  }\n  input, button, textarea, button, select {\n    ", "\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: none;\n    outline: none;\n    background: none;\n    line-height: 1.5;\n    font-size: 16px;\n    -webkit-appearance: none;\n    &:focus {\n      border: none;\n      outline: none;\n    }\n  }\n  ::selection {\n    background: rgba(255, 250, 118, 0.35);\n  }\n\n  /* ===============================================\n  # smart phone\n  =============================================== */\n  @media screen and (max-width: 780px) {\n    html, body {\n      font-size: 15px;\n    }\n    .pc {\n      display: none !important;\n    }\n  }\n\n  /* ===============================================\n  # pc\n  =============================================== */\n  @media screen and (min-width: 781px) {\n    .sp {\n      display: none !important;\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  font-family: -apple-system, system-ui, \"Helvetica Neue\", \"Segoe UI\",\n    \"Hiragino Kaku Gothic ProN\", \"Hiragino Sans\", \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", Arial,\n    \u30E1\u30A4\u30EA\u30AA, Meiryo, sans-serif;\n  word-wrap: break-word;\n  word-break: break-all;\n  -moz-font-feature-settings: \"palt\";\n  -webkit-font-feature-settings: \"palt\";\n  font-feature-settings: \"palt\";\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: auto;\n  -webkit-text-stroke: 1px transparent;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  letter-spacing: 0.05rem;\n  font-weight: 400;\n  color: var(--text);\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    :root {\n      ", "\n      --width: ", ";\n      --topHeight: ", ";\n    }\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n padding: 50 px 0 50 px;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\npadding: 20 px 0 20 px;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n margin: 50 px 0 50 px 0;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    margin: 30 px 0 30 px 0;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n margin: 10px 0 10px 0;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n margin:1%;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n margin:100px;\n text-align:center;\n font-size:3.5rem;\n\n   @media(max-width:768px){\n     margin:50px;\n    font-size:2.5rem;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n margin:0 5% 0;\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n background: #eee;\n text-align:center;\n margin:0 auto;\n padding-bottom:30px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  margin:0;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n display:grid;\n grid-template-columns:1fr 1fr 1fr;\n grid-gap:0px;\n max-width:1024px;\n text-align:center;\n margin:0 auto;\n\n @media(max-width:1024px){\n grid-template-columns:1fr 1fr 1fr;\n }\n @media(max-width:767px){\n grid-template-columns:1fr 1fr;\n margin:0;\n }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n   display: grid;\n   grid-gap:50px;\n   margin:0 10% 0;\n   grid-template-columns:1fr 1fr;\n   max-width:1000px;\n   >div{\n    margin:40px;\n   }\n   >div:last-child{\n    text-align:center;\n   }\n\n   @media(max-width:1024px){\n     margin:10px;\n     grid-gap:10px;\n     grid-template-columns:1fr;\n      >div{\n    margin:5x;\n   }\n   }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n font-size:1rem;\n margin:10px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n font-size:", ";\n     position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto auto 10%;\n    display: flex;\n\n    flex-direction: column;\n    justify-content: center;\n    text-align:", " ;\n    color: #fff;\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;;\ntext-align:left;\n font-weight:bold;\n line-height: 1.8em;\n padding:10px 0 30px;\n width:", ";\n  font-size:", ";\n margin:0 auto;\n /* margin:", "; */\n @media(max-width:767px){\n  width:90%;\n  font-size:", ";\n }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;;\n font-weight: bold;\n margin-bottom:0px;\n text-align:center;\n font-size:", ";\n border:", ";\n padding:", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;;\n font-weight: bold;\n margin:0 auto;\n text-align:center;\n font-size:1.8rem;\n padding:30px;\n list-style:none;\n  @media(max-width:767px){\n\u3000\u3000font-size:1.4rem;\n   }\n >li{\n  margin:10px;\n    text-align:center;\n }\n >p{\n   display:inline-block;\n   font-size:1.2rem;\n    text-align:center;\n   color:grey;\n  width:60%;\n   margin:10px;\n   @media(max-width:767px){\nwidth:90%;\n font-size:1.1rem;\n   }\n }\n"]);

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
}; // ==========テキストデザイン===========

exports.size = size;

var Title = _styledComponents["default"].h1(_templateObject3());

exports.Title = Title;

var Nav = _styledComponents["default"].ul(_templateObject4());

exports.Nav = Nav;

var SubTitle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.small ? "1.8rem" : "2.2rem";
}, function (props) {
  return props.border && "1px solid black";
}, function (props) {
  return props.noSpace ? "10px" : "30px";
});

exports.SubTitle = SubTitle;

var Description = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.space && "50%";
}, function (props) {
  return props.large ? "1.1rem" : "1rem";
}, function (props) {
  return props.both && "0 10px 0 10px";
}, function (props) {
  return props.small && "0.8rem";
});

exports.Description = Description;

var ImageText = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.large ? "1.4rem" : "3.5rem";
}, function (props) {
  return props.left ? "left" : "center";
});

exports.ImageText = ImageText;

var MinTitle = _styledComponents["default"].div(_templateObject8()); // ==========テキストデザイン===========
// ------------- レイアウト--------------------


exports.MinTitle = MinTitle;

var TwoColumn = _styledComponents["default"].h1(_templateObject9());

exports.TwoColumn = TwoColumn;

var GridList = _styledComponents["default"].figure(_templateObject10()); // ------------- レイアウト--------------------


exports.GridList = GridList;

var Featured = _styledComponents["default"].section(_templateObject11());

exports.Featured = Featured;

var News = _styledComponents["default"].section(_templateObject12());

exports.News = News;

var Gallery = _styledComponents["default"].div(_templateObject13());

exports.Gallery = Gallery;

var Content = _styledComponents["default"].h1(_templateObject14());

exports.Content = Content;

var Figure = _styledComponents["default"].figure(_templateObject15());

exports.Figure = Figure;

var SpaceS = _styledComponents["default"].div(_templateObject16());

exports.SpaceS = SpaceS;

var SpaceM = _styledComponents["default"].div(_templateObject17());

exports.SpaceM = SpaceM;

var SpaceL = _styledComponents["default"].div(_templateObject18());

exports.SpaceL = SpaceL;

var PaddingS = _styledComponents["default"].div(_templateObject19());

exports.PaddingS = PaddingS;

var PaddingM = _styledComponents["default"].div(_templateObject20());
/* ===============================================
#  set css variables
=============================================== */


exports.PaddingM = PaddingM;

function setColor() {
  var styles = "";

  for (var key in colors) {
    styles += "--".concat(key, ": ").concat(colors[key], ";");
  }

  return (0, _styledComponents.css)(_templateObject21(), styles, size.width, size.topHeight);
}
/* ===============================================
#  font setting
=============================================== */


var font = (0, _styledComponents.css)(_templateObject22());
/* ===============================================
#  global style
=============================================== */

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject23(), setColor, font, font);
var _default = GlobalStyle;
exports["default"] = _default;