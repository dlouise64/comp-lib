const env = require('babel-preset-env').buildPreset;

module.exports = {
  "presets": [
    ["env", {
      "es2015": {
        "modules": process.env.BABEL_ENV === 'es' ? false : 'commonjs'
      }
    }]
  ]
}
