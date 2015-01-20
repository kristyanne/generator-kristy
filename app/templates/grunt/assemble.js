/**
 * assemble.js
 * ===========
 * `grunt assemble`
 */

var assembleTask = function( grunt ) {
    'use strict';

    grunt.config('assemble', {
        options: {
            layoutdir: 'src/html/layouts',
            partials:  'src/html/partials/**/*.hbs',
            data:      'src/html/data/**.json',
            flatten:   true
        },
        build: {
            options: {
                layout: 'base-layout.hbs'
            },
            src:  ['src/html/pages/**/*.hbs'],
            dest: 'dist/html/'
        }
    });
};

module.exports = assembleTask;