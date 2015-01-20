/**
 * Gruntfile.js
 * ===========
 * Build tasks for the <%= customData.siteName %> Project.
*/

module.exports = function(grunt) {
	'use strict';

    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: require('./package.json'),
    });

    grunt.loadTasks('grunt');

    grunt.registerTask('dev', 'Start a live-reloading dev webserver on localhost and watch for changes', ['browserSync', 'watch']);

    grunt.registerTask('css', 'Compile CSS file(s) and run autoprefixer', ['sass', 'autoprefixer']);
};