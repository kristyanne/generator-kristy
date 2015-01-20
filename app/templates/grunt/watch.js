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

    grunt.config('watch', {
        css: {
            files: ['src/**/*.scss'],
            tasks: ['css']
        },<% if (customData.includeAssemble) { %>
        assemble: {
            files: ['src/html/**/*.hbs'],
            tasks: ['assemble']
        }<% } else { %>
        html: {
            files: ['src/html/**/*.html'],
            tasks: ['html']
        }<% } %>
    });
};

module.exports = watchTask;
