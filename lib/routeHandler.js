'use strict';
let http = require('http');
let Router = require('../lib/router');

function routeCreator(port, routeObjects) {
  let router = new Router();

  routeObjects.forEach((rObj) => {
    let method = rObj.method;
    let route = rObj.route;
    let fn = rObj.fn;
    router[method](route, fn);
  });
  http.createServer(router.route()).listen(port);
}


module.exports = routeCreator;
