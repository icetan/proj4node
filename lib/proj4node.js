var Proj4js = require('./proj4js'),
    transform = Proj4js.transform.bind(Proj4js);

Proj4js.Proj.prototype.transform = function (proj, point) {
  return transform(proj, this, point);
};

module.exports = transform;

module.exports.transform = transform;
module.exports.Proj = Proj4js.Proj;
module.exports.Point = Proj4js.Point;
module.exports.WGS84 = Proj4js.WGS84;
