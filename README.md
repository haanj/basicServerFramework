# router-framework-haanj

This is a framework made for a Code Fellows 401 assignment. The purpose is to help the user create a RESTFUL server by automatically handling aspects of the HTTP node module.

# Usage

Usage is pretty straightforward.

1. Require in the module
```
var server = require(router-framework-haanj)
```
2. Create an array of routes you want to create. Include method, route, and callback function
```
var routes = [
  {
    method: 'get',
    route: '/users',
    fn: (req, res) => {
      console.log('/users route hit with GET request');
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('hello users');
      res.end();
    }
  },
  {
    method: 'post',
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
```
3. Start the server by passing in your port and route array.
```
server(3000, routes)
```
