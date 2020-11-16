const { task, src, watch, dest } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

var gulp = require("gulp");
var ghPages = require("gulp-gh-pages");

gulp.task("deploy", function () {
  return gulp.src("./dist/**/*").pipe(ghPages());
});

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
