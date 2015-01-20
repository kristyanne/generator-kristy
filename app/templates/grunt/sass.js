/**
 * sass.js
 * ===========
 * `grunt sass`
 */

var sassTask = function( grunt ) {
    'use strict';

    grunt.config('sass', {
        options: {
            sourceMap:   true,
            outputStyle: 'compressed'<% if (customData.includeBourbon) { %>,
            includePaths: require('node-bourbon').includePaths<% } %>
        },
        build: {
            files: [
                {
                    expand: true,
                    cwd:    'src/scss',
                    src:    ['**/*.scss'],
                    dest:   'dist/css',
                    ext:    '.css'
                }
            ]
        }
    });
};

module.exports = sassTask;
