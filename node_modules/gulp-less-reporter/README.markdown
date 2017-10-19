gulp-less-reporter
==================

[![Build Status](https://travis-ci.org/Kuniwak/gulp-less-reporter.svg)](https://travis-ci.org/Kuniwak/gulp-less-reporter)
[![npm version](https://badge.fury.io/js/gulp-less-reporter.svg)](http://badge.fury.io/js/gulp-less-reporter)

This plugin provide an error reporter for [gulp-less](https://github.com/plus3network/gulp-less).
The reporter print like the following:

	[12:47:01] gulp-less: variable @undefined-variable is undefined in file somefile.less line no. 2
	
	        1 html {
	        2   color: @undefined-variable;
	        3 }


Install
-------

1. Install gulp-less-reporter

		$ npm install --save-dev gulp-less-reporter

2. Attach the reporter as an error handler for gulp-less

	```javascript
	var reporter = require('gulp-less-reporter');
	
	gulp.task('build', function() {
	  gulp.src('somefile.less').
	    pipe(less()).on('error', reporter).
	    pipe(gulp.dest('/dev/null'));
	});
	```


License
-------

[MIT](http://kuniwak.mit-license.org/)
