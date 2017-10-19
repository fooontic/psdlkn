/* Main watcher */
var gulp = require('gulp'),
	config = require('./config');

gulp.task('watch', ['webserver'], function(){
	gulp.watch([config.pathTo.Src.Pug], function(event, cb) {
		gulp.start('pug')
	});
	gulp.watch([config.pathTo.Src.Styles], function(event, cb) {
		gulp.start('sass')
	});
	gulp.watch([config.pathTo.Src.Images], function(event, cb) {
		gulp.start('images')
	});
	gulp.watch([config.pathTo.Src.Txt], function(event, cb) {
		gulp.start('txt')
	});
	gulp.watch([config.pathTo.Src.JS], function(event, cb) {
		gulp.start('js')
	});
	// watch(config.pathTo.Src.Fonts, function(event, cb) {
	// 	gulp.start('fonts')
	// });
});
