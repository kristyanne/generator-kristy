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
            tasks: ['sass']
        }
    });
};

module.exports = watchTask;
