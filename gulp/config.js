module.exports = {

	/* Path settings */
	pathTo: {
		Src: { // Set source paths
			Styles: 'src/scss/**/*.scss',
			MainStyleFile: 'src/scss/main.scss',
			Pug: 'src/pug/**/*.pug',
			JS: 'src/js/main.js',
			Images: 'src/img/**/*.*',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess','src/CHANGELOG.md','src/README.md'],
			GHPages: 'build/**/*'
		},
		Build: { // Set build paths
			Styles: 'dist/css',
			Html: 'dist/',
			Images: 'dist/img/',
			JS: 'dist/js/',
			JSMainFile: 'main.js',
			Clean: ['dist/**/*', '!dist/.gitignore', '!dist/video/*'],
			Txt: 'dist/'
		}
	},


	// GitHub Pages options
	ghpOptions: {
		remoteUrl: "git@github.com/fooontic/fooontic.github.io.git"
	},


	// Browser versions for automatically prefix
	autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],


	// BrowserSync local web server settings
	browserSync: {
		server: './dist',
		baseDir: './dist',
		tunnel: true,
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		logPrefix: "Fix Remont — case"
	}
}
