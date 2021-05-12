// Import React so that you can use JSX in HeadComponents
const React = require("react");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.unshift(<meta name="segment-key" content="" key="segment-key" />);
  replaceHeadComponents(headComponents);
};

exports.onRenderBody = function ({ setHeadComponents }, pluginOptions) {
  var redditSnippet =
    "!function(w,d){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement('script');t.src='https://www.redditstatic.com/ads/pixel.js',t.async=!0;var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(t,s)}(window,document);";
  const loadSnippet =
    `window.redditSnippetLoaded = false;
    (function(w) {
        const delayedEvents = [];
        w.rdt = function() {
            delayedEvents.push(arguments);
        }
        w.redditSnippetLoader = function (id, callback) {
            if (!w.redditSnippetLoaded) {
                w.redditSnippetLoaded = true;
                ` +
    redditSnippet +
    `

                rdt('init',id);
                for (var i = 0; i < delayedEvents.length; i++) {
                    rdt.apply(null, delayedEvents[i]);
                }
                if (callback) callback();
            }
        }
    })(window);`;
  setHeadComponents([
    React.createElement("script", {
      key: "reddit-pixel",
      dangerouslySetInnerHTML: { __html: loadSnippet },
    }),
  ]);
};
