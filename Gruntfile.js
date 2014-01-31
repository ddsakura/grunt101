/*jslint unparam:true */
'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true
                },
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: 'less/',
                    dest: 'assets/',
                    src: ['**/*.less'], // Actual pattern(s) to match.
                    //flatten: true,
                    ext: '.css',   // Dest filepaths will have this extension.
                    rename: function (dest, matchedSrcPath, options) {
                        return path.join(dest, matchedSrcPath.replace('les2', 'module/1'));
                    }
                }]
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        concurrent: {
            target: {
                tasks: ['watch', 'nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        },
        shell: {
            start: {
                options: {
                    stdout: true
                },
                command: 'mojito start'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('ls', ['shell']);
};
