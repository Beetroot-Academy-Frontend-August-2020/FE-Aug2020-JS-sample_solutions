const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

const SASS_PATH = './styles/scss/*.scss';
const CSS_PATH = './styles/css/';

function autoPrefixer() {
  return gulp
    .src('./styles/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./styles/css'))
}

function watch() {
  gulp.watch(SASS_PATH, scss);
}

function scss() {
  return gulp
    .src(SASS_PATH) // look for all SASS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(CSS_PATH));
}

exports.scss = scss;
exports.watch = watch;
exports.autoPrefixer = autoPrefixer;

// ./node_modules/gulp/bin/gulp.js <task name>
// Webpack, Grunt