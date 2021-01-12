'use strict';

/**
 * Run TypeScript code without compiling it
 * Source-map-support mimics node's stack trace making debugging easier
 * ts-node register helps compiling and importing TypeScript modules
 */
require('source-map-support').install();
require('ts-node').register();
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const plugins = [
  {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NLKXX4C",
      },
  },
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-167088906-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "OPT-TNX9L5N",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },

module.exports = require('./gatsby-config.ts');
export default {
  plugins: plugins,
};