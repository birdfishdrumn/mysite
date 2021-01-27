"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nheight:460px;\n  margin:0 5% 0;\n  object-fit:cover;\n  @media(max-width:767px){\n    width:100%;\n    height:auto;\n  margin:0;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject());
exports.Image = Image;