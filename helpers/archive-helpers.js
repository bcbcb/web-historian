var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');
var context = this;

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  var sites = [];
  fs.readFile(context.paths.list, 'utf8', function(err, data){
  if(err){
    console.log('oof!')
  } else {

    sites = data.split('\n')
    console.log(sites)
    sites.pop();
  }
  });

  console.log(sites)
  return sites;
};

exports.isUrlInList = function(){
};

exports.addUrlToList = function(){
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
  var sites = context.readListOfUrls();
  console.log(sites)
  var scrape = function(siteUrl){
    var webData;
    http.get('http://' + siteUrl, function(res){
      res.setEncoding('utf8');
      res.on('data', function(chunk){
        webData = chunk;
      })
      res.on('end', function(){
        fs.writeFile(context.paths.archivedSites + '/' + siteUrl, webData);
      })
    })
  }
  sites.forEach(function(site){
    scrape(site);
  });
};

