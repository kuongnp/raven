'use strict';
const Gulp = require('gulp');
const exec = require('child_process').exec;

Gulp.task('mongo', () => {
    exec('./mongod', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
    });
})