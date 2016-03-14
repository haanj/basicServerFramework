'use strict';
let joshuasmodule = require(__dirname + '/../index.js');

let routes = [
  {
    meth: 'get',
    route: '/users',
    fn: (req, res) => {
      console.log('/users route hit with GET request');
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('hello users');
      res.end();
    }
  },
  {
    meth: 'post',
    route: '/users',
    fn: (req, res) => {
      console.log('/users route hit with POST request');

      var jsonObject = '';
      req.on('data', (data) => {
        jsonObject += data;
      });

      return req.on('end', () => {
        console.log(jsonObject);
        jsonObject = JSON.parse(jsonObject);
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(JSON.stringify('hello ' + jsonObject.name));
        return res.end();
      });
    }
  }
];

joshuasmodule.createRoutes(routes);
