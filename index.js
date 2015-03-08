'use strict';

var fs = require('fs');

module.exports = fs.createReadStream.bind(fs, 'sk.txt');
