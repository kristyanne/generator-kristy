/**
 * copy.js
 * =======
 * `grunt copy`
 */

var copyTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('copy', {<% if (!customData.includeAssemble) { %>
        html: {
            files: [{
                cwd:    paths.src + '/html',
                expand: true,
                src:    ['**/*.html'],
                dest:   paths.dist + '/html'
            }]
        },<% } %><% if (customData.hasProduction) { %>
        production: {
            expand: true,
            cwd:    paths.dist,
            src:    ['**/*', '!html/**'],
            dest:   paths.production
        }<% } %>
    });
};

module.exports = copyTask;
