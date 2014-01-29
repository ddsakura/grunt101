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
                    dest: 'css/',
                    src: ['**/*.less'], // Actual pattern(s) to match.
                    //flatten: true,
                    ext: '.css',   // Dest filepaths will have this extension.
                    rename: function(dest, matchedSrcPath, options) {
                        console.log(matchedSrcPath);
                        return path.join(dest, matchedSrcPath.replace('les2', 'module/1'));
                    }
                }]
            }
        },
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
