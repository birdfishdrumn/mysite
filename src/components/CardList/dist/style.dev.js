"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n display:flex;\ntext-align:center;\n@media(max-width:767px){\n  flex-direction:column;\n   margin:10px;\n}\n@media(max-width:1024){\n\n   margin:10px;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GridCard = _styledComponents["default"].div(_templateObject());

exports.GridCard = GridCard;