var gulp    = require('gulp')
  , watch   = require('gulp-watch')
  , babel   = require('gulp-babel')
  , mkdirp  = require('mkdirp')
  , path    = require('path')

function silentError(err) {
  console.error(err.toString())
  this.emit('end')
}

gulp.task('watch', function () {
  return watch('src/**/*.js', function (file) {
    var subpath = path.resolve(file.path, '..').substring(__dirname.length + 5)
    return gulp.src(file.path)
      .pipe(babel())
      .on('error', silentError)
      .pipe(gulp.dest('lib/' + subpath))
  })
})

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'))
})

gulp.task('default', ['build'])