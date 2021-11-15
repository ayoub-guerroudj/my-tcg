var gulp = require ('gulp');
var less = require ('gulp-less');
var rename = require ('gulp-rename');
var browserify = require ('gulp-browserify');
var babel = require ('gulp-babel');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('less', function (done) {
    gulp.src('./less/**/*.less')
        .pipe(less())
    .pipe(gulp.dest('./public/css'));
    done();
});

gulp.task('babel', function (done) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            "presets": ["es2015"]
        }))
        .on('error', function(error) {
            console.log(error);

            done();
        })
        .pipe(gulp.dest('./tmp'))
        done();
});

gulp.task('browserify', gulp.series('babel', function (done) {
    gulp.src('./tmp/app.js')
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .on('error', function(error) {
            console.log(error);

            done();
            
        })
        .pipe(rename('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js'))
        done();
}));

gulp.task('build', gulp.series('browserify', 'less'));

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['browserify']);
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', gulp.series('build'));