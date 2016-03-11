'use strict';
let http = require('http');
let Router = require('../lib/router');
let studentsRouter = new Router();
///-------------------------------------------------------\\
studentsRouter.get('/users', (req, res) => {
  console.log('/users route hit with GET request');
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('hello users');
  res.end();
});


studentsRouter.post('/users', (req, res) => {
  console.log('/users route hit with POST request');

  let jsonObject = '';
  req.on('data', (data) => {
    jsonObject += data;
  });

  return req.on('end', () => {
    jsonObject = JSON.parse(jsonObject);
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write(JSON.stringify('hello ' + jsonObject.name));
    return res.end();
  });
});
///------------------------------------------------------\\


module.exports.write = () => {
  console.log('blahblah');
};


http.createServer(studentsRouter.route()).listen(3000);
