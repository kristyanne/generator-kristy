/**
 * clean.js
 * ========
 * `grunt clean`
 */

var cleanTask = function( grunt ) {
    'use strict';

    grunt.config('clean', {
        dist: ['dist/']
    });
};

module.exports = cleanTask;
