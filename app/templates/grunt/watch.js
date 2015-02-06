/**
 * watch.js
 * ========
 * `grunt watch`
 *
 * TODO:
 * - watch html
 * - watch JS
 */

var watchTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('watch', {
        css: {
            files: [paths.src + '/**/*.scss'],
            tasks: ['css']
        },<% if (customData.includeAssemble) { %>
        assemble: {
            files: [paths.src + '/html/**/*.hbs'],
            tasks: ['assemble']
        }<% } else { %>
        html: {
            files: [paths.src + '/html/**/*.html'],
            tasks: ['html']
        }<% } %>
    });
};

module.exports = watchTask;
