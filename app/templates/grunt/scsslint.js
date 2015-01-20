/**
 * scsslint.js
 * ===========
 * `grunt scsslint`
 */

var scssLintTask = function( grunt ) {
    'use strict';

    grunt.config('scsslint', {
        options: {
            bundleExec: true,
            config: '.scss-lint.yml',
            exclude: ['src/scss/lib/**/*.scss']
        },
        files: [
            'src/scss/**/*.scss'
        ]
    });
};

module.exports = scssLintTask;