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
        env: grunt.option('env') || 'dev',
        paths: {
            src:   'src',
            dist:  'dist',
            tmp:   'tmp'<% if (customData.hasProduction) { %>,
            production: '<%= _.slugify(customData.productionDir) %>'<% } %>
        }
    });


    grunt.loadTasks('grunt');

    /**
     * Local Development
     * -----------------
     * `grunt dev`
     */
    grunt.registerTask('dev', ['browserSync', 'watch']);

    /**
     * Build Task
     * ----------
     * dev: `grunt build`
     * production: `grunt build --env=production`
     */
    grunt.registerTask('build', 'All the tasks', function()
    {
        var tasks = ['clean:dist', 'html', 'js', 'css', 'clean:tmp'];

        <% if (customData.hasProduction) { %>if(grunt.config('env') === 'production')
        {
            tasks.push('clean:production', 'copy:production');
        }<% } %>

        grunt.task.run( tasks );
    });


    /**
     * Single Tasks
     * ------------
     */
    grunt.registerTask('css',   ['scsslint', 'sass', 'autoprefixer']);
    grunt.registerTask('icons', ['svgmin:icons', 'webfont:icons', 'css']);
    grunt.registerTask('html',  ['<% if (customData.includeAssemble) { %>assemble<% } else { %>copy:html<% } %>']);
    grunt.registerTask('js',    [<% if (customData.includeBrowserify) { %>'browserify',<% } %>'uglify']);
};
