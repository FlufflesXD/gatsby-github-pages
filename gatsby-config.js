module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://vefmac.ca/",
        manifestSettings: {
          favicon: "./content/images/favicon.png",
          siteName: "Vefmac",
          shortName: "Vefmac",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: false,
        },
      },
    },
  ],
};
