'use strict';

var rest = require('rest');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');

// export configured NodeJS rest module for working backend REST service which return JSON format
module.exports = rest.wrap(mime).wrap(errorCode, {code: 500});
