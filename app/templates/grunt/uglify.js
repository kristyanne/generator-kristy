/**
 * uglify.js
 * =========
 * `grunt uglify`
 */

var uglifyTask = function( grunt ) {
    'use strict';

    // Get Paths Config
    var paths = grunt.config('paths');

    // Task Config
    grunt.config('uglify', {
		<% if (customData.includeBrowserify) { %>browserify: {
			files: [{
				'dist/js/main.min.js' : 'tmp/js/main.bundled.js'
			}]
		}<% } else { %>build: {
            files: [{
                'dist/js/main.min.js' : 'src/js/main.js'
            }]
        }<% } %>
    });
};

module.exports = uglifyTask;
