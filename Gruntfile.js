module.exports = function(grunt) {

var mozjpeg = require('imagemin-mozjpeg');
	
	grunt.initConfig({
	  htmlmin: {                                     // Task
		dist: {                                      // Target
		  options: {                                 // Target options
			removeComments: true,
			collapseWhitespace: true
		  },
		  files: {                                   // Dictionary of files
			'dist/index.html': 'src/index.html',     // 'destination': 'source'
			'dist/contact.html': 'src/contact.html'
		  }
		},
		dev: {                                       // Another target
		  files: {
			'dist/index.html': 'src/index.html',
			'dist/contact.html': 'src/contact.html'
		  }
		}
	  },
	  imagemin: {                          // Task
		static: {                          // Target
		  options: {                       // Target options
			optimizationLevel: 7,
			svgoPlugins: [{ removeViewBox: false }],
			use: [mozjpeg()]
		  },
		  files: {                         // Dictionary of files
			'dist/img.jpg': 'src/img.jpg' // 'destination': 'source'
		   
		  }
		},
		dynamic: {                         // Another target
		  files: [{
			expand: true,                  // Enable dynamic expansion
			cwd: 'src/',                   // Src matches are relative to this path
			src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
			dest: 'dist/'                  // Destination path prefix
		  }]
		}
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin:dynamic']);
}


