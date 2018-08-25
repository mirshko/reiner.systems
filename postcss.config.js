const postcssImport = require(`postcss-import`);
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssBrowserReporter = require(`postcss-browser-reporter`);
const postcssReporter = require(`postcss-reporter`);
const rucksack = require(`rucksack-css`);

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      features: {
        "nesting-rules": true
      }
    }),
    postcssBrowserReporter(),
    postcssReporter(),
    rucksack()
  ]
});
