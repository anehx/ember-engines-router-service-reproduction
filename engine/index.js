'use strict';

const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'engine',
  lazyLoading: {
    enabled: false,
  },
  isDevelopingAddon() {
    return true;
  },
});
