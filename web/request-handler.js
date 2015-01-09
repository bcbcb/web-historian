var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var url = require('url');
var fs = require('fs');

// require more modules/folders here!

var actions = {
  GET: function (req, res) {
    if(req.url === '/' || req.url === ''){
      helpers.serveAssets(res, '/index.html', function(){
        console.log('OMGGGGGGG');
      }, 'text/html')
    } else if(req.url === '/styles.css') {
        helpers.serveAssets(res, '/styles.css', function(){
          console.log(req.url);

        }, 'text/css');
    } else if (req.url === '/favicon.ico'){
        res.end()
    } else if (path.dirname(req.url) === '/archives') {
    }

    // Not found
    else {
      console.log(req.url)
      console.log(path.dirname(req.url))
      helpers.sendResponse(res, req.url + ' not found', 404)
      res.end()
    }

    //helpers.sendResponse(res, 'success!', 200);
  },
  POST: function (req, res) {

    req.on('data', function (data) {
      console.log(data.substr(4))
      console.log(archive.paths.list)
      // console.log(querystring.parse(data).url)
      fs.appendFile(archive.paths.list, data.substr(4), function(){
        // if(err){console.log('messed up')}
        console.log('yeahhh')
      })
    });
    console.log(req.query);
  },
  OPTIONS: function (req, res) {},
}

exports.handleRequest = function (req, res) {
  console.log (req.method, req.url)
  if(actions[req.method]){
    actions[req.method](req, res);
  }
  res.end();
};

