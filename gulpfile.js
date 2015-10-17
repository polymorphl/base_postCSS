/*
** Load plugins
*/
var gulp        = require('gulp')
    postcss     = require('gulp-postcss'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


/*
** Configuration du projet
*/

var conf = {
  sprite: {
    cssPath: './css',
    imgPath: './img/sprite.png',
    retina: false,
    oD: true
  },
  css: {
    mainFile: 'css/app.css',
    newFile: 'bundle.css',
    DestFolder: 'css/'
  },
  watchers: {
    e_css: true, //Enable CSS watching
    css: 'css/**/*.css',
    e_html: true,
    html: '*.html'
  },
  browserSyncBase: './',
}

/* ====================================================
              ** Ne Pas modifier en dessous
                ** Configuration GULP
*  ==================================================== */

/*
** Operations of the postCSS
*/
var processors = [
  require('precss'),
  require('postcss-sprites')({
    stylesheetPath: conf.sprite.cssPath,
    spritePath: conf.sprite.imgPath,
    retina: conf.sprite.retina,
    outputDimensions: conf.sprite.oD,
    filterBy: function(image) {
      return /icons/gi.test(image.url)
    } // sprite assets only in folder /icons/
  }),
  require('rucksack-css'),
  require('autoprefixer')({browsers: ['last 5 versions']}),
  require('css-mqpacker'),
  require('postcss-merge-rules'),
  require('cssnano') //Remove spaces in file
];

/*
** Describe the job of the processors
*/
gulp.task('css', function(){
  gulp.src(conf.css.mainFile)
    .pipe(postcss(processors))
    .pipe(rename(conf.css.newName))
    .pipe(gulp.dest(conf.css.DestFolder))
});

/*
** browserSync all connected devices
*/
gulp.task('browser-sync', function() {
	 browserSync({
		  server: {
				baseDir: conf.browserSyncBase
		  }
	 });
});

/*
** Watch task (CSS and HTML reloading)
*/
gulp.task('watch', function() {

	// Recharge les .css onChange
  if (conf.watchers.e_css)
	   gulp.watch(conf.watchers.css, ['css', browserSync.reload]);

	// Recharge les .html onChange
  if (conf.watchers.e_html)
	   gulp.watch(conf.watchers.html, browserSync.reload);

});

/*
** Describe the main task of gulp
*/
gulp.task('default', ['css', 'browser-sync', 'watch']);
