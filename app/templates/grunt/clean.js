/**
 * clean.js
 * ========
 * `grunt clean`
 */

var cleanTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('clean', {
        dist: [paths.dist + '/'],
        tmp:  [paths.tmp + '/']<% if (customData.hasProduction) { %>,
        production: [paths.production + '/']<% } %>
    });
};

module.exports = cleanTask;
