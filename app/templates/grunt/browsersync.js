/**
 * browsersync.js
 * ==============
 * `grunt browserSync`
 *
 * TODO:
 * - add JS files to the bdFiles array.
 */

var browserSyncTask = function( grunt ) {
    'use strict';

    grunt.config('browserSync', {
        dev: {
            bsFiles: {
                src: [
                    'dist/css/*.css',
                    'dist/html/*.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir:  'dist/html',
                    directory: true
                }
            }
        }
    });
};

module.exports = browserSyncTask;
