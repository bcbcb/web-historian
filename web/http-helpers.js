var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var self = this;

exports.sendResponse = function(res, data, statusCode, contentType){
  if(contentType){
    headers['Content-Type'] = contentType;
  }
  res.writeHead(statusCode, self.headers);
  res.end(data.toString());
}

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback, contentType) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  fs.readFile(archive.paths.siteAssets + asset, 'utf8', function(err, data){
    // if(err){console.log('issaq is da man/ logception')}
    self.sendResponse(res, data, 200, contentType );
    // callback();

  });
};

// As you progress, keep thinking about what helper functions you can put here!


/*module.exports = function () {
  // if the archive folder doesn't exist, create it.
  if (!fs.existsSync("./archives")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives");
  }

  // if the file doesn't exist, create it.
  if (!fs.existsSync("./archives/sites.txt")) {
    // We use fs.openSync to create the file
    var file = fs.openSync("./archives/sites.txt", "w");
    fs.closeSync(file);
  }

  // if the folder doesn't exist, create it.
  if (!fs.existsSync("./archives/sites")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives/sites");
  }
};
*/
