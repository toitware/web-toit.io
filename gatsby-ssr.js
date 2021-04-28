"use strict";
// Import React so that you can use JSX in HeadComponents
const React = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const HeadComponents = [<meta name="segment-key" content="" key="segment-key" />];

// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.unshift(<meta name="segment-key" content="" key="segment-key" />);
  replaceHeadComponents(headComponents);
};

var _react = require("react");
var _react2 = _interopRequireDefault(_react);

exports.onRenderBody = function (_ref) {
  var setHeadComponents = _ref.setHeadComponents;
  var snippet =
    "!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement('script');t.src='https://www.redditstatic.com/ads/pixel.js',t.async=!0;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s)}}(window,document);";
  var delayedLoader =
    "\n  window.redditSnippetLoaded = false;\n  window.redditSnippetLoader = function (id, callback) {\n    if (!window.redditSnippetLoaded) {\n      window.redditSnippetLoaded = true;\n      " +
    snippet +
    "\n      rdt('init',id);\n      if (callback) callback();\n    }\n  }\n";
  setHeadComponents([
    React.default.createElement("script", {
      key: "reddit-pixel",
      dangerouslySetInnerHTML: { __html: delayedLoader },
    }),
  ]);
};
