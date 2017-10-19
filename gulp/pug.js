/* Jade */
var gulp = require('gulp'),
	config = require('./config'),
	prettify = require('gulp-prettify'),
	pug = require('gulp-pug'),
	newer = require('gulp-newer'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload,
	plumber = require('gulp-plumber');

gulp.task('pug', function() {
	return gulp.src(config.pathTo.Src.Pug)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(newer(config.pathTo.Build.Html))
		.pipe(pug({
			pretty: true
		}))
		.pipe(prettify({indent_size: 2}))
		.pipe(gulp.dest(config.pathTo.Build.Html))
		.pipe(reload({stream: true}));
});
