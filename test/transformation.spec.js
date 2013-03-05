var proj4node = require('../'),
    WGS84 = proj4node.WGS84,
    Point = proj4node.Point,
    Proj = proj4node.Proj,

    testData = require('./testdata');

describe("transformation", function() {
  testData.testPoints.forEach(function (data) {
    var proj = new Proj(testData.defs[data.code]),
        xyResult, llResult;
    it("of "+data.code+" should transform lon/lat to projected x/y", function() {
      xyResult = proj.transform(WGS84, {x:data.ll[0], y:data.ll[1]});
      expect(xyResult.x).toBeCloseTo(data.xy[0], 2);
      expect(xyResult.y).toBeCloseTo(data.xy[1], 2);
    });

    it("of "+data.code+" should transform map x/y to lon/lat", function() {
      llResult = WGS84.transform(proj, {x:data.xy[0], y:data.xy[1]});
      expect(llResult.x).toBeCloseTo(data.ll[0], 6);
      expect(llResult.y).toBeCloseTo(data.ll[1], 6);
    });
  });
});
