module.exports = {
    siteMetadata: {
      title: "ᴛᴏɪᴛ",
      siteUrl: "https://toit.io"
    },
    plugins: [
      {
        resolve: "gatsby-plugin-google-analytics",
        options: {
          trackingId: "UA-140543854-3",
          respectDNT: true,
          head: true,
        },
      },
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
      'gatsby-plugin-eslint',
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
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /\.svg$/
          },
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
