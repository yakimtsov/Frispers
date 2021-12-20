const {src, dest, task, series, watch} = require("gulp");
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass')(require('node-sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

task("copy:html", () => {
    return src("./*.html").pipe(dest("dist"));
});
task("copy:js", () => {
    return src("script/*.js").pipe(dest("dist/script"));
});
task("copy:img", () => {
    return src("img/**/*").pipe(dest("dist/img"));
});
task("clean", () => {
    return src( 'dist/**/*', { read: false })
    .pipe( rm() )
});
task("styles", () => {
    return src("style/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/style/'));
});
watch("style/**/*", series("styles"));
watch("./*.html", series("copy:html"));
watch("img/**/*", series("copy:img"));
watch("script/*.js", series("copy:js"));

task('default', series("clean", "copy:html", "copy:js", "copy:img", "styles"));