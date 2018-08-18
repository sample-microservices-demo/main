collection.find({}).toArray(function(err, docs) {
  that.event_emitter.emit("AlertsObtained", docs); //nodejs event emitter
  db.close();
})



// event listener
this.event_emitter.on("AlertsObtained", function(data) {
  //do sth here
})



// use config library for configuring microservices

var config = require('config');
var microserviceConfig = config.get('microservice.config');


var server = app.listen(microserviceConfig.port, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('server running on: http://%s:%s', host, port);
})