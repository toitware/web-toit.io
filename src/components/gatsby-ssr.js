"use strict";
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
exports.onRenderBody = function (_ref) {
  var setHeadComponents = _ref.setHeadComponents;
  var snippet =
    "!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement('script');t.src='https://www.redditstatic.com/ads/pixel.js',t.async=!0;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s)}}(window,document);";
  var delayedLoader =
    "\n  window.redditSnippetLoaded = false;\n  window.redditSnippetLoader = function (id, callback) {\n    if (!window.redditSnippetLoaded) {\n      window.redditSnippetLoaded = true;\n      " +
    snippet +
    "\n      rdt('init',id);\n      if (callback) callback();\n    }\n  }\n";
  setHeadComponents([
    _react2.default.createElement("script", {
      key: "reddit-pixel",
      dangerouslySetInnerHTML: { __html: delayedLoader },
    }),
  ]);
};
