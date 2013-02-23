var proj4node = require('../lib/proj4node'),
    Proj = proj4node.Proj,

    wkts = [
      {
        srs: 'WGS84 Lat/Long Degrees -180 ==> +180',
        unit: 'degree',
        proj: 'longlat',
        def: 'GEOGCS["WGS84 Lat/Long Degrees -180 ==> +180",DATUM["D_WGS_1984",SPHEROID["World_Geodetic_System_of_1984",6378137,298.257222932867]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]]'
      },
      {
        srs: 'ALG-S-AN',
        unit: 'meter',
        proj: 'lcc',
        def: 'PROJCS["ALG-S-AN",GEOGCS["VOIR1875",DATUM["VOIR1875",SPHEROID["CLRK-IGN",6378249.200,293.46602129],TOWGS84[-73.0000,-247.0000,227.0000,0.000000,0.000000,0.000000,0.00000000]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Lambert Tangential Conformal Conic Projection"],PARAMETER["false_easting",500000.000],PARAMETER["false_northing",300000.000],PARAMETER["scale_factor",0.999625800000],PARAMETER["central_meridian",2.70000000000000],PARAMETER["latitude_of_origin",33.30000000000000],UNIT["Meter",1.00000000000000]]'
      },
      {
        srs: 'CANQ27-M15M',
        unit: 'meter',
        proj: 'tmerc',
        def: 'PROJCS["CANQ27-M15M",GEOGCS["LL27",DATUM["NAD27",SPHEROID["CLRK66",6378206.400,294.97869821]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",304800.000],PARAMETER["false_northing",0.000],PARAMETER["scale_factor",0.999900000000],PARAMETER["central_meridian",-90.00000000000000],PARAMETER["latitude_of_origin",0.00000000000000],UNIT["Meter",1.00000000000000]]'
      },
      {
        srs: 'Non-Earth, (Meter)',
        unit: 'meter',
        proj: 'identity',
        def: 'LOCAL_CS["Non-Earth, (Meter)",LOCAL_DATUM["Local Datum",0],UNIT["Meter", 1],AXIS["X",EAST],AXIS["Y",NORTH]]'
      },
      {
        srs: 'SVY21',
        unit: 'meter',
        proj: 'tmerc',
        def: 'PROJCS["SVY21",GEOGCS["SVY21[WGS84]",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",28001.642],PARAMETER["False_Northing",38744.572],PARAMETER["Central_Meridian",103.8333333333333],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",1.366666666666667],UNIT["Meter",1.0]]'
      }
    ];

describe("parsing", function() {
  wkts.forEach(function (wkt) {
    var proj = new Proj(wkt.def);
    it("of "+wkt.srs+" should find srs name", function() {
      expect(proj.srsCode).toBe(wkt.srs);
    });
    it("of "+wkt.srs+" should find units", function() {
      expect(proj.units.toLowerCase()).toBe(wkt.unit);
    });
    it("of "+wkt.srs+" should find projection type", function() {
      expect(proj.projName).toBe(wkt.proj);
    });
  });
});
