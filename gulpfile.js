const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const path = {
    fileSass: "src/sass/**/*.+(scss|sass)",
    dist: 'src/css',
    fileHtml: 'src/*.html'
};


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src(path.fileSass)
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
        prefix: "",
        suffix: ".min"
      }))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest(path.dist))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(browserSync.stream({once: true}))
});

gulp.task('watch', function() {
    gulp.watch(path.fileSass, gulp.parallel('styles'));
    gulp.watch(path.fileHtml).on('change', browserSync.reload); 
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles')); 