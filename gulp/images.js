var gulp = require('gulp'),
	config = require('./config'),
	imagemin = require('gulp-imagemin'), // Optimize images
	pngquant = require('imagemin-pngquant'),
	size = require('gulp-size'), // Display the size of something
	newer = require('gulp-newer'),
	gutil = require('gulp-util'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload,
	plumber = require('gulp-plumber');



/* Images */
gulp.task('images', function () {
	return gulp.src(config.pathTo.Src.Images)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(newer(config.pathTo.Build.Images))
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 7,
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(size({
			title: 'Images'
		}))
		.pipe(gulp.dest(config.pathTo.Build.Images))
		.pipe(reload({stream: true}));
});
