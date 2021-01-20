module.exports = {
    siteMetadata: {
      title: "Toitware - The software platform for IoT",
      siteUrl: "https://toitware.com"
    },
    plugins: [
      {
        resolve: "gatsby-plugin-google-analytics",
        options: {
          trackingId: "foobar",
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
      'gatsby-plugin-eslint',
      "gatsby-plugin-sitemap",
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          icon: "src/images/icon.png",
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
    ],
  };
