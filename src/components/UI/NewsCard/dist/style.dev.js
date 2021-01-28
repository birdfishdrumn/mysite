"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCard = exports.NewsImage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n display:inline-block;\n  width:80%;\n  text-align:center;\n\n  background:white;\n  height:150px;\n  display:flex;\n  margin:20px auto;\n  @media(max-width:768px){\n    width:100%;\n  }\n  >div:last-child{\n    padding:20px;\n    >p{\n      color:grey;\n      font-size:0.9rem;\n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n width:150px;\n height:150px;\n object-fit:cover;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsImage = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject());
exports.NewsImage = NewsImage;

var ListCard = _styledComponents["default"].div(_templateObject2());

exports.ListCard = ListCard;