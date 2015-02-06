/**
 * assemble.js
 * ===========
 * `grunt assemble`
 */

var assembleTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('assemble', {
        options: {
            layoutdir: paths.src + '/html/layouts',
            partials:  paths.src + '/html/partials/**/*.hbs',
            data:      paths.src + '/html/data/**.json',
            flatten:   true
        },
        build: {
            options: {
                layout: 'base-layout.hbs'
            },
            src:  [paths.src + '/html/pages/**/*.hbs'],
            dest: paths.dist + '/html/'
        }
    });
};

module.exports = assembleTask;