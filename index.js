const fs = require('fs');
module.exports = (opts) => fs.createReadStream('./sk.txt', opts);
