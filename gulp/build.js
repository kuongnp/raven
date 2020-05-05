var gutil = require('gulp-util');

// merge with default parameters
var args = Object.assign({'prod': false, default: true}, gutil.env);

var configs = {default: './config.json'};
var config = configs.default;
module.exports = require(config);