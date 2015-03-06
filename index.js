'use strict';

var fs = require('fs');

module.exports = function (opts) {
  return fs.createReadStream('sk.txt', opts);
};
