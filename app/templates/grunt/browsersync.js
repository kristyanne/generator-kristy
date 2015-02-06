/**
 * browsersync.js
 * ==============
 * `grunt browserSync`
 */

var browserSyncTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('browserSync', {
        dev: {
            bsFiles: {
                src: [
                    paths.dist + '/css/*.css',
                    paths.dist + '/html/*.html',
                    paths.dist + '/js/*.js'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir:  [paths.dist + '/html', paths.dist],
                    directory: true
                }
            }
        }
    });
};

module.exports = browserSyncTask;
