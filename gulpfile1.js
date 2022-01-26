var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();


gulp.task("serve", function(){
    browserSync.init({
        server: "./public"
    })

    gulp.watch("./dev/scss/**/*.scss", gulp.series("sass"))
    gulp.watch("./public/index.html").on("change", browserSync.reload)
})

gulp.task("sass", function (){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
})

gulp.task('start', gulp.series("serve", "sass"))

