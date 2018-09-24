//include gulp from node_modules
const gulp = require("gulp");
//concat js files
const concat = require("gulp-concat");
//minify js
const uglify = require("gulp-uglify");
//concat css files
const concatcss = require("gulp-concat-css");
//minify css
const cleancss = require("gulp-clean-css");
//compress images
const compress = require("gulp-imagemin");
//sass 
const sass = require("gulp-sass");

//sass 
gulp.task("sass", function(){
    return gulp.src("src/sass/*.scss")
    .pipe(sass())
    .pipe(concatcss("main.min.css"))
    .pipe(cleancss())
    .pipe(gulp.dest("pub/css"));
});

//copy html files from src to pub
gulp.task("copyhtml",function(){
 return   gulp.src("src/*.html")
    .pipe(gulp.dest("pub/"))
});

//compress images and copy images from src to pub
gulp.task("convertimages", function(){
    return gulp.src("src/images/*")
    .pipe(compress())
    .pipe(gulp.dest("pub/images"))
});

//minify and concat js files
gulp.task("convertjs", function(){
    return gulp.src("src/js/*.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("pub/js"))

});

//control changes in files
gulp.task("watcher", function(){
    gulp.watch("src/js/*.js", ["convertjs"]);
    gulp.watch("src/sass/*.scss", ["sass"]);
    gulp.watch("src/*.html", ["copyhtml"]);
    gulp.watch("src/images/*", ["convertimages"]);

});



//default gulp to run tasks and watch changes
gulp.task("default",["copyhtml", "convertjs","sass", "convertimages", "watcher"]);
