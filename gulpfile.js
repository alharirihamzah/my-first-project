const gulp = require('gulp')
const watch = require('gulp-watch')

const source = './server'
const destination = './build/server'

gulp.task('default', ['server'])

gulp.task('server', () => {
	return watch(source + '/**/*', {
		verbose: true,
		ignoreInitial: true
	}).pipe(gulp.dest(destination))
})
