
var dnode = require('dnode');

var d = dnode.connect({
  host: 'geoip-service.herokuapp.com',
  port: '80'
});

d.on('remote', function (remote) {
  remote.geoip('95.27.151.173', function (s) {
    console.log('Info', s);
    d.end();
  });
});
