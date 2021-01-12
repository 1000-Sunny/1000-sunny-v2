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

module.exports = require('./gatsby-config.ts');

plugins: [
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
]
