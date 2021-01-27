"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDescription = exports.ProductButton = exports.ProductText = exports.Content = exports.Image = exports.ProductImage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _Button = require("../Button");

var _GlobalStyle = require("../../style/GlobalStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nfont-size:1.3rem;\nmargin:0;\n  width:40%;\n @media(max-width:767px){\n      font-size:0.7em;\n      line-height: 1.2em;\n      width:50%;\n      font-wight:lighter;\n      padding:10px 0 10px;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display:", ";\n  width:100px;\n  background:transparent;\n   @media(max-width:767px){\n    width:70px;\n    line-height:2px;\n    font-size:1rem;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n font-size:3.0em;\n     position: absolute;\n    top: 70px;\n    right: 0;\n    bottom:0;\n    left: 0;\n    margin: auto auto 10%;\n    display: flex;\n    padding-left:15%;\n    flex-direction: column;\n    justify-content: center;\n    text-align:", " ;\n    color: black;\n    @media(max-width:767px){\n          top: 10px;\n        margin: auto auto 0 20px;\n      font-size:1.2em;\n      padding:10px;\n    }\n    /* text-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding:20px;\n      padding: 5px 10px;\n      background:white;\n      border: 1px solid black;\n      font-weight: bold;\n      font-size:16px;\n      text-transform:uppercase;\n      display:inline-block;\n      color:black;\n      text-decoration:none;\n     cursor:pointer;\n      &:hover{\n        color:white;\n        background: black;\n      }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nheight:460px;\n\n  object-fit:cover;\n  @media(max-width:767px){\n    width:100%;\n    height:auto;\n\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n margin:0 5% 20px;\n position:relative;\n    @media(max-width:767px){\n    margin:0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductImage = _styledComponents["default"].div(_templateObject());

exports.ProductImage = ProductImage;
var Image = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject2());
exports.Image = Image;

var Content = _styledComponents["default"].div(_templateObject3()); // top,bottomに数値をくわえると文字部分が下に下がる。


exports.Content = Content;

var ProductText = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.left ? "left" : "center";
});

exports.ProductText = ProductText;
var ProductButton = (0, _styledComponents["default"])(_Button.Button)(_templateObject5(), function (props) {
  return props.noBtn && "none";
});
exports.ProductButton = ProductButton;
var ProductDescription = (0, _styledComponents["default"])(_GlobalStyle.Description)(_templateObject6());
exports.ProductDescription = ProductDescription;