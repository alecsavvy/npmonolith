const dotenv = require("dotenv");
const path = require("path");

// pull in .env configuration
dotenv.config({ path: path.join(__dirname, ".env") });
const env = { ...process.env };

// utilities
const buildPath = (appName) => `./apps/${appName}/dist`;
const appPath = (appName) => `${buildPath(appName)}/index.js`;

module.exports = [
  {
    name: "block-persister",
    script: appPath("block-persister"),
    env,
  },
  {
    name: "block-reader",
    script: appPath("block-reader"),
    env,
  },
];
