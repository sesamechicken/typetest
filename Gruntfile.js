module.exports = function(grunt) {

  grunt.registerTask('watch', [ 'watch' ]);
  grunt.initConfig({
    watch: {
      js: {
        files: ['js/*.js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true,
        }
      },
      html: {
      	files: ['index.html'],
      	options: {
      		livereload: true,
      	}
      }
    },
    uglify: {
      options: {
        mangle: true,
        report: 'gzip'
      },
      my_target: {
        files: {
          'js/typetest.min.js': ['js/typetest.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};