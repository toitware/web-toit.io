module.exports = {
  siteMetadata: {
    title: "Toit",
    siteUrl: "https://toit.io",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "5705522",
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-remove-trailing-slashes",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        inlineSvgOptions: [
          {
            test: /(\.inline\.svg|icons\/.*\.svg)$/,
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        ],
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-segment-js",
      options: {
        // The keys must be defined otherwise the plugin will no load analytics.js
        prodKey: "XXXXXXXXXXXXXXXXX",
        devKey: "XXXXXXXXXXXXXXXXX",
        manualLoad: true,
        trackPage: true,
      },
    },
  ],
};
