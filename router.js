exports.route = function (handle, pathname, response, request) {
  console.log('Routing ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  }
  else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('NOT FOUND');
    response.end();
  }
};