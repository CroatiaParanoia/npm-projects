"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Icon: true
};
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _icon.default;
  }
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

var _interface = require("./interface");

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});
var _default = _icon.default;
exports.default = _default;