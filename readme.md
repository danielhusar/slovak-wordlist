# slovak-wordlist [![Build Status](http://img.shields.io/travis/danielhusar/slovak-wordlist.svg?style=flat-square)](https://travis-ci.org/danielhusar/slovak-wordlist)
> List of the slovak words

Downloaded from http://p.brm.sk/sk_wordlist/

## Install

```sh
$ npm install --save slovak-wordlist
```

## Data

Name and occurency is separated by space and entries by new line.
```
a 824912
v 790766
je 639788
sa 635631
na 466848
to 365449
si 216814
s 203466
ako 192420
```


## Usage

```js
var slovakWordlist = require('slovak-wordlist');

slovakWordlist().on('data', function (data) {
  console.log(data.toString());
});
```

## API

#### opts

Type: `Object`  
Default: `undefined`

fs.createReadStream [options](http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
