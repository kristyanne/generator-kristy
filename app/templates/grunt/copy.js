/**
 * copy.js
 * =======
 * `grunt copy`
 */

var copyTask = function( grunt ) {
    'use strict';

    grunt.config('copy', {<% if (!customData.includeAssemble) { %>
        html: {
            files: [{
                cwd:    'src/html',
                expand: true,
                src:    ['**/*.html'],
                dest:   'dist/html'
            }]
        }<% } %>
    });
};

module.exports = copyTask;
