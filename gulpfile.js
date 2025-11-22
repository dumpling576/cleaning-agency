const gulp = require('gulp');
require('./gulp/dev.js');
require('./gulp/docs.js');


gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'files:dev', 'js:dev'),
		gulp.parallel('connect:dev','watch:dev' )
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'files:docs', 'js:docs'),
		gulp.parallel('connect:docs' )
	)
);

const imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('src/images/**/*.{png,jpg,jpeg,svg,gif}')
    .pipe(imagemin([
      imagemin.gifsicle({optimizationLevel: 2}),
      imagemin.mozjpeg({quality: 75}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo()
    ], { verbose: false }))
    .pipe(gulp.dest('dist/images'));
});