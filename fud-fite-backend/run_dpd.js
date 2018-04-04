var deployd = require('deployd');

// Start deploy and talk to mongodb on localhost
var dpd = deployd({
  //port: 2403,
  port: process.env.PORT || 2403,
  env: 'development',
  db: {
    host: '127.0.0.1',
    port: 27017,
    name: '-deployd'
  }
});

dpd.listen();

dpd.on('listening', function() {
  console.log("Server is listening");
});

dpd.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

