# Proj4node

*Synchronous [Proj4js](http://trac.osgeo.org/proj4js/) slimmed down for Node.js*

## Usage

Convert a WGS884 coordinate to SWEREF99 TM.

```javascript
var proj4node = require('proj4node'),
    sweref = proj4node('+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'),
    p = sweref.transform(proj4node.WGS84, {x:11.901, y:57.689});

console.log(p);
```

## Syncing with Proj4js SVN repository

```
$ git clone https://github.com/icetan/proj4node.git
$ cd proj4node
$ ./connect-proj4js-repo.sh
```

Then read instructions from output.

## Attributions

Important to note, I have only removed functionality from the original Proj4js
project. All the hard stuff (algorithms and parsing) is solely thanks to the
authors of Proj4js.
