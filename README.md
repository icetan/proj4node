# Proj4node

Synchronous Proj4js for Node.js... huh?

## Usage

Convert a WGS884 coordinate to SWEREF99 TM.

```javascript
var proj4node = require('proj4node'),
    sweref = new proj4node.Proj('+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'),
    p = proj4node.transform(proj4node.WGS84, sweref, new proj4node.Point(11.901, 57.689));

console.log(p);
```

## Syncing with Proj4js SVN repository

```
$ git clone https://github.com/icetan/proj4node.git
$ cd proj4node
$ ./connect-proj4js-repo.sh
```

Then read instructions from output.
