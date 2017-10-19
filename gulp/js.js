
var gulp = require('gulp'), // Task runner
	config = require('./config'),
	concat = require('gulp-concat'), // Concatenates files
	streamqueue = require('streamqueue'), // Pipe queued streams progressively, keeping datas order.
	rigger = require('gulp-rigger'), // // Include content of one file to another
	jshint = require('gulp-jshint'), // JS code linter
	stylish = require('jshint-stylish'), // Reporter for JSHint
	size = require('gulp-size'), // Display the size of something
	sourcemaps = require('gulp-sourcemaps'), // Write source maps
	rename = require("gulp-rename"), // Rename files
	uglify = require('gulp-uglify'), // Minify JS
	browserSync = require("browser-sync"),
	reload = browserSync.reload;



/* JavaScript*/
gulp.task('js', function () {
	return streamqueue(
		{ objectMode: true },
		// gulp.src(pathTo.src.JS).pipe(rigger()).pipe(size({title: 'JavaScript'})),
		gulp.src(config.pathTo.Src.JS).pipe(rigger()).pipe(jshint()).pipe(jshint.reporter(stylish)).pipe(size({title: 'JavaScript'}))
	)
		.pipe(concat(config.pathTo.Build.JSMainFile))
		.pipe(sourcemaps.init())
		.pipe(gulp.dest(config.pathTo.Build.JS))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(size({
			title: 'Total JavaScript'
		}))
		.pipe(gulp.dest(config.pathTo.Build.JS))
		.pipe(reload({stream: true}));
});