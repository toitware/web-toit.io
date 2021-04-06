// Import React so that you can use JSX in HeadComponents
const React = require("react");

const HeadComponents = [<meta name="segment-key" content="" key="segment-key" />];

// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.unshift(<meta name="segment-key" content="" key="segment-key" />);
  replaceHeadComponents(headComponents);
};
