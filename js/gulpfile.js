var gulp = require('gulp');

gulp.task("copy-index",function(){
    gulp.src("../js/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\under\\js"));
    gulp.src("../css/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\under\\css"));
    gulp.src("../font/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\under\\font"));
    gulp.src("../index.html")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\under"));
});

gulp.task("copy-img", function () {
    gulp.src("../img/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\under\\img"));
});

gulp.task("watchall",function(){
    gulp.watch("..*/**/*",["copy-index"]);
    gulp.watch("../js/**/*", ["copy-index"]);
    gulp.watch("../img/**/*",["copy-img"]);
    gulp.watch("../index.html",["copy-index"]);
})

