/**
 * Gruntfile.js
 * ===========
 * Build tasks for the <%= customData.siteName %> Project.
*/

module.exports = function(grunt) {
	'use strict';

    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});


    grunt.initConfig({
        pkg: require('./package.json'),
    });


    grunt.loadTasks('grunt');

    grunt.registerTask('dev', ['browserSync', 'watch']);

    grunt.registerTask('build', ['clean:dist', 'css', 'html']);

    grunt.registerTask('css', ['scsslint', 'sass', 'autoprefixer']);

    grunt.registerTask('html', ['<% if (customData.includeAssemble) { %>assemble<% } else { %>copy:html<% } %>']);
};