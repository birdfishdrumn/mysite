"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = exports.HeaderMenu = exports.Bar = exports.HeaderBar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n @media(max-width:767px){\n   display:none;\n }\n >ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    margin-top: 18px;\n    font-weight:bold;\n    font-size:1.2rem;\n    text-shadow:1px 1px 2px black;\n    color: white;\n    >li{\n          -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n   font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n    }\n     >li:not(:last-child) {\n    margin-right: 55px;\n}\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:100%;\nmargin-top:10px;\n   display:flex;\n   justify-content:space-between;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n    max-width: 1204px;\n    width: 100%;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   flex-grow: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderBar = (0, _styledComponents["default"])(_AppBar["default"])(_templateObject());
exports.HeaderBar = HeaderBar;
var Bar = (0, _styledComponents["default"])(_Toolbar["default"])(_templateObject2());
exports.Bar = Bar;

var HeaderMenu = _styledComponents["default"].div(_templateObject3());

exports.HeaderMenu = HeaderMenu;

var Nav = _styledComponents["default"].nav(_templateObject4());

exports.Nav = Nav;