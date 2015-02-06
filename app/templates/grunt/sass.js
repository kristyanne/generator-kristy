/**
 * sass.js
 * ===========
 * `grunt sass`
 */

var sassTask = function( grunt ) {
    'use strict';

    // Determine Build Environment
    var isProduction = grunt.config('env') === 'production';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('sass', {
        options: {
            sourceMap:    isProduction ? false : true,
            outputStyle:  isProduction ? 'compressed' : 'expanded'<% if (customData.includeBourbon) { %>,
            includePaths: require('node-bourbon').includePaths<% } %>
        },
        build: {
            files: [{
                expand: true,
                cwd:    paths.src + '/scss',
                src:    ['**/*.scss'],
                dest:   paths.dist + '/css',
                ext:    '.css'
            }]
        }
    });
};

module.exports = sassTask;
