/**
 * scsslint.js
 * ===========
 * `grunt scsslint`
 */

var scssLintTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('scsslint', {
        options: {
            bundleExec: true,
            config: '.scss-lint.yml',
            exclude: [paths.src + '/scss/lib/**/*.scss']
        },
        files: [
            paths.src + '/scss/**/*.scss'
        ]
    });
};

module.exports = scssLintTask;