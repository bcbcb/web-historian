// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var fs = require('fs');
var http = require('http')
var helpers = require('../helpers/archive-helpers');

helpers.downloadUrls();
