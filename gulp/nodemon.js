'use strict';
const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');


Gulp.task('nodemon', () => {
    
    const nodeArgs = ['--inspect'];

    if (process.env.DEBUGGER) {
        nodeArgs.push('--debug=0.0.0.0:8082');
    }

    Nodemon({
        script: 'server.js',
        ext: 'js md jsx html',
        ignore: [
            'backend/assets/**/*',
            'frontend/**/assets/*',
            'gulp/**/*',
            'node_modules/**/*'
        ]
    })
    .on('restart', (files) => {
        console.log('change detected:', files);
    });
    
});
