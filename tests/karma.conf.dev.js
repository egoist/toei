var conf = require('./karma.conf')
module.exports = function (config) {
  conf(config)
  config.set({
    'singleRun': false
  })
}
