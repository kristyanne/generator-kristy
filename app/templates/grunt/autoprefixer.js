/**
 * autoprefixer.js
 * ===============
 * `grunt autoprefixer`
 */

var autoprefixerTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('autoprefixer', {
        build: {
            options: {
                browsers: ['last 2 versions', '> 1%', 'ie > 7'],
                map:      true
            },
            files: [{
                cwd:    paths.dist + '/css',
                expand: true,
                src:    ['**/*.css'],
                dest:   paths.dist + '/css'
            }]
        }
    });
};

module.exports = autoprefixerTask;