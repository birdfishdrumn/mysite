"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\npadding:20px;\nmargin:0 auto;\nmax-width:800px;\n\n/* border:solid 3px black; */\nborder:dotted #FF3333 7px;\n border-radius: 1px;\n;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppWrapper = _styledComponents["default"].div(_templateObject());

exports.AppWrapper = AppWrapper;