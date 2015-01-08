var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');

// require more modules/folders here!

var actions = {
  GET: function (req, res) {
    if(req.url === '/' || req.url === ''){
      helpers.serveAssets(res, '/index.html', function(){
        console.log('OMGGGGGGG');
      }, 'text/html')
    } else {
        helpers.serveAssets(res, '/styles.css', function(){
          console.log('else');

        }, 'text/css');
      }
    //helpers.sendResponse(res, 'success!', 200);
  },
  POST: function (req, res) {},
  OPTIONS: function (req, res) {},
}


exports.handleRequest = function (req, res) {
  if(actions[req.method]){
    actions[req.method](req, res);
  } else{
    res.end();
  }
};
