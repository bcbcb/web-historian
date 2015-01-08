var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');

// require more modules/folders here!

var actions = {
  GET: function (req, res) {
    if(req.url === '/'){
      helpers.serveAssets(res, '/index.html', function(){
        console.log('OMGGGGGGG');
      })
    }
    //helpers.sendResponse(res, 'success!', 200);
  },
  POST: function (req, res) {},
  OPTIONS: function (req, res) {},
}


exports.handleRequest = function (req, res) {
  if(actions[req.method]){
    actions[req.method](req, res);
  }
  res.end();
};
