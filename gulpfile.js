const { task, src, watch, dest } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

sass.compiler = require("node-sass");

function scss() {
  return src("src/scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(dest("dist/css"));
}

function imgmin() {
  return src("src/assets/images/*.*")
    .pipe(imagemin())
    .pipe(dest("dist/images"));
}

task("watch", () => {
  scss();
  imgmin();

  watch("src/assets/images/*.*", imgmin);
  watch("src/scss/**/*.scss", scss);
});

var gulp = require("gulp");
var ghPages = require("gulp-gh-pages");

gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(ghPages());
});

var purify = require("gulp-purifycss");

gulp.task("css", function () {
  return gulp
    .src("./public/app/example.css")
    .pipe(purify(["./public/app/**/*.js", "./public/**/*.html"]))
    .pipe(gulp.dest("./dist/"));
});

var postcss = require("gulp-postcss");

gulp.task("css", function () {
  return gulp.src("./src/*.css").pipe(postcss()).pipe(gulp.dest("./dest"));
});
