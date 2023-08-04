const buildPath = (appName) => `./apps/${appName}/dist`;
const appPath = (appName) => `${buildPath(appName)}/index.js`;

module.exports = [
  {
    name: "block-persister",
    script: appPath("block-persister"),
  },
  {
    name: "block-reader",
    script: appPath("block-reader"),
  },
];
