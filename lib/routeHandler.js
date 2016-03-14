'use strict';
let http = require('http');
let Router = require('../lib/router');

function routeCreator(routeObjects) {
  let router = new Router();

  routeObjects.forEach((rObj) => {
    let method = rObj.meth;
    let route = rObj.route;
    let fn = rObj.fn;
    router[method](route, fn);
  });
  http.createServer(router.route()).listen(3000);
}


module.exports.createRoutes = routeCreator;
