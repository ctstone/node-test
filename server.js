var myserver = require('./myserver');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  //'/upload': requestHandlers.upload,
  '/show': requestHandlers.show,
};
myserver.start(router.route, handle);