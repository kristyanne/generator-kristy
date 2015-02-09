/**
 * browserify.js
 * =============
 * `grunt browserify`
 */

var browserifyTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('browserify', {
        options: {
            debug: true
        },
        dev: {
            src:  paths.src + '/js/main.js',
            dest: paths.tmp + '/js/main.bundled.js'
        }
    });
};

module.exports = browserifyTask;