var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

exports.start = function (response) {
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(body);
  response.end();
};

exports.upload = function (response, request) {
  var form = new formidable.IncomingForm();
  form.parse(request, function (error, fields, files) {
    fs.rename(files.upload.path, '/tmp/test.jpg');
  });

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('received');
  response.end();
};

exports.show = function (response) {
  fs.readFile('/tmp/test.jpg', 'binary', function (error, file) {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(error + '\n');
    }
    else {
      response.writeHead(200, { 'Content-Type': 'image/jpg' });
      response.write(file, 'binary');
    }
    response.end();
  });
};