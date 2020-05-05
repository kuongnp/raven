'use strict';
const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');


Gulp.task('frontend', () => {
    
    Nodemon({
        script: 'serverfrontend.js',
        ext: 'js md jsx html json',
        ignore: [
            'backend/**/*',
            'frontend/**/assets/**/*',
            'gulp/**/*',
            'node_modules/**/*'
        ]
        
    })
    .on('restart', (files) => {
        console.log('change detected:', files);
    }); 
    
});
