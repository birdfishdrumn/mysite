"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n display:grid;\n grid-template-columns:1fr 1fr 1fr;\nmargin:0 auto;\ntext-align:center;\nmax-width:1100px;\n\n@media(max-width:1024px){\n  grid-template-columns:1fr;\n  margin:0 auto;\n  text-align:center;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents["default"].div(_templateObject());

exports.List = List;