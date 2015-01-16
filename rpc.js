
var geoip = require('geoip-lite')
  , dnode = require('dnode');

var server = dnode({
  geoip: function (ip, cb) {
    cb(geoip.lookup(ip));
  }
}).listen(process.env.PORT || 5004);
