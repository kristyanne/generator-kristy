/**
 * autoprefixer.js
 * ===============
 * `grunt autoprefixer`
 */

var autoprefixerTask = function( grunt ) {
    'use strict';

    grunt.config('autoprefixer', {
        build: {
            options: {
                browsers: ['last 2 versions', '> 1%', 'ie > 7'],
                map:      true
            },
            files: [{
                cwd:    'dist/css',
                expand: true,
                src:    ['**/*.css'],
                dest:   'dist/css'
            }]
        }
    });
};

module.exports = autoprefixerTask;