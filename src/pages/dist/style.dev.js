"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gallery = exports.News = exports.Featured = exports.Title = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n margin:0 5% 0;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n background: #eee;\n text-align:center;\n margin:0 auto;\n padding-bottom:30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n font-family:'\u6E38\u660E\u671D','Yu Mincho','Hiragino Mincho Pro',sans-serif;\n font-weight: bold;\n     position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto auto 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents["default"].h1(_templateObject()); // export const TwoColumn = styled.h1 `
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

var Featured = _styledComponents["default"].section(_templateObject2());

exports.Featured = Featured;

var News = _styledComponents["default"].section(_templateObject3());

exports.News = News;

var Gallery = _styledComponents["default"].div(_templateObject4());

exports.Gallery = Gallery;