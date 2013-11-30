module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["less/"]
        },
        files: {
          "css/layout.css": "less/layout.less"
        }
      },
      production: {
        options: {
          paths: ["less/"],
          cleancss: true
        },
        files: {
          "css/layout.css": "less/layout.less"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};