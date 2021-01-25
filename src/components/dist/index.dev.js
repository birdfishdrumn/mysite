"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Product: true,
  TabMenu: true
};
Object.defineProperty(exports, "Product", {
  enumerable: true,
  get: function get() {
    return _Product["default"];
  }
});
Object.defineProperty(exports, "TabMenu", {
  enumerable: true,
  get: function get() {
    return _TabMenu["default"];
  }
});

var _Product = _interopRequireDefault(require("./Product/Product"));

var _Logo = require("./Logo");

Object.keys(_Logo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Logo[key];
    }
  });
});

var _TabMenu = _interopRequireDefault(require("./TabMenu/TabMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }