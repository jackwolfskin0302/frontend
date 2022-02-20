const fs = require('fs');

const { versionString, latestVersion, latestVersionString, isLatest } = require('./version-data');

const VERSION_PARTS_REGEX = /^(\d+\.\d+)(?:\.\d+)?-?(\w+)?(?:\.\d+$)?/;

/* Creates a structure like:
 *
 *  {
 *    "stable": [
 *      { "version": 6.3, "string": "6.3", "label": "latest" },
 *      { "version": 6.2, "string": "6.2" },
 *      { "version": 6.1, "string": "6.1" },
 *      { "version": 6, "string": "6.0" }
 *    ],
 *    "preRelease": [
 *      { "version": 6.4, "string": "6.4", "label": "beta" },
 *      { "version": 7, "string": "7.0", "label": "alpha" }
 *    ]
 *  }
 *
 * Note that the stable releases are sorted in descending order, and pre-releases in ascending.
 *
 * The simple sorting logic will break if the minor version number is >= 10, e.g. 6.10.
 * That seems very unlikely, given our release cadence, so we opted to keep it simple.
 */
const versions = fs
  .readdirSync('./src/generated/versions')
  .filter((v) => v.match(VERSION_PARTS_REGEX))
  .sort((a, b) => parseFloat(b || latestVersion) - parseFloat(a || latestVersion))
  .map((v) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const { version: versionFromFile } = require(`../generated/versions/${v}/package.json`);
    const [, string, label] = versionFromFile.match(VERSION_PARTS_REGEX);
    return {
      version: Number(string),
      string,
      label,
    };
  })
  .reduce(
    (acc, v) => {
      if (v.version > latestVersion) {
        acc.preRelease.unshift(v);
      } else {
        acc.stable.push(v);
      }
      return acc;
    },
    {
      stable: [{ version: latestVersion, label: 'latest', string: latestVersionString }],
      preRelease: [],
    }
  );

module.exports = versions;
