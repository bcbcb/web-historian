// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var fs = require('fs');
var http = require('http')
var helpers = require('../helpers/archive-helpers');

fs.readFile(helpers.paths.list, 'utf8', function(err, data){
  if(err){
    console.log('oof!')
  } else {
    var sites = data.split('\n')
    sites.pop();
    console.log(sites)
  }
});

var test = {host: 'www.google.com'}

/*var scrape = function(url){
}


var req = http.request(test, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});*/

var scraped = http.get(test, function(res){
  res.setEncoding('utf8');
  res.on('data', function(data){
    console.log(data)
  })
})


