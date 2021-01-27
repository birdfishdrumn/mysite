"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth:250px;\nheight:250px;\nmargin:0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeatureCard = _styledComponents["default"].div(_templateObject());

exports.FeatureCard = FeatureCard;