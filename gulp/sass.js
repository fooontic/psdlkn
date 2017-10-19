/* SASS */
var gulp = 				require('gulp'),
	config = 			require('./config'),
	sass = 				require('gulp-sass'), // Compile SASS to CSS
	cleancss = 		require('gulp-clean-css'), // Minify CSS
	csscomb = 			require('gulp-csscomb'), // Coding style formatter for CSS
	autoprefixer = 		require('gulp-autoprefixer'), // Prefix CSS
	sourcemaps = 		require('gulp-sourcemaps'), // Write source maps
	newer = 			require('gulp-newer'), // To pass through only those source files that are newer than corresponding destination files.
	gutil = 			require('gulp-util'),
	rename = 			require('gulp-rename'), // Rename files
	browserSync = 		require("browser-sync"),
	reload = 			browserSync.reload,
	postcss = 			require('gulp-postcss'),
	inlineSVG = 		require('postcss-inline-svg'),
	svgo = 				require('postcss-svgo'),
	plumber = 			require('gulp-plumber'); // Report errors from gulp-plugins


gulp.task('sass', function () {
	gulp.src(config.pathTo.Src.MainStyleFile)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(newer(config.pathTo.Build.Styles))
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer(config.autoprefixerBrowsers))
		.pipe(postcss([
			inlineSVG,
			svgo
		]))
		.pipe(csscomb())
		.pipe(gulp.dest(config.pathTo.Build.Styles))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleancss())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.pathTo.Build.Styles))
		.pipe(reload({stream: true}));
});
