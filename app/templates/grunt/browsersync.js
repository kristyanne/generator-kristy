/**
 * browsersync.js
 * ==============
 * `grunt browserSync`
 *
 * TODO:
 * - change path for HTML files when watching for changes.
 * - add JS files to the bdFiles array.
 */

var browserSyncTask = function( grunt ) {
    'use strict';

    grunt.config('browserSync', {
        dev: {
            bsFiles: {
                src: [
                    'dist/css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir:  'dist',
                    directory: true
                }
            }
        }
    });
};

module.exports = browserSyncTask;
