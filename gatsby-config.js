module.exports = {
  siteMetadata: {
    title: 'Blah Blah Fake Title',
  },
  plugins: [
      {
        resolve: 'gatsby-plugin-react-helmet',
      },
      {
        resolve: 'gatsby-plugin-styled-components',
      },
      {
        resolve: 'gatsby-plugin-glamor',
        options: {
          resolve: 'gatsby-plugin-typography',
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        },
      },
    ],
};