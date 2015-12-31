module.exports = function(grunt) {

    'use strict';

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({

       pkg: grunt.file.readJSON('package.json'),

        uglify: {
            main: {
                files: {
                    'dist/<%= pkg.name %>.min-<%= pkg.version %>.js': ['gate.js']
                }
            }
        },

        copy: {
            main: {
                src: pkg.name + '.js',
                dest: 'dist/'
            }
        },

        rename: {
            main: {
                files: [
                    {src: ['dist/gate.js'], dest: 'dist/' + pkg.name + '-' + pkg.version + '.js'}
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['uglify', 'rename', 'copy']);

};