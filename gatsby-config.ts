import { siteMetadata } from "./config";
import tailwindConfig from "./tailwind.config";
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-codegen`,
    {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-NLKXX4C",
    
          // Include GTM in development.
          //
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: false,
    
          // datalayer to be set before GTM is loaded
          // should be an object or a function that is executed in the browser
          //
          // Defaults to null
          defaultDataLayer: { platform: "gatsby" },
    
          // Specify optional GTM environment details.
          gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
          gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
          dataLayerName: "YOUR_DATA_LAYER_NAME",
    
          // Name of the event that is triggered
          // on every Gatsby route change.
          //
          // Defaults to gatsby-route-change
          routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/contents/blog/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `portfolio`,
            path: `${__dirname}/contents/portfolio/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `basepages`,
            path: `${__dirname}/contents/basepages`,
        },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            tailwindcss(tailwindConfig),
            autoprefixer,
            ...(process.env.NODE_ENV === `production`
              ? [require(`cssnano`)]
              : []),
          ],
        },
      },
]

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus,
        },
    } as any)
}

export default {
  siteMetadata: siteMetadata,
  plugins: plugins,
};
