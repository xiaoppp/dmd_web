var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var replace = require('gulp-replace');
var gulpIgnore = require('gulp-ignore');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var git = require('gulp-git');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var minifycss = require('gulp-minify-css')
var cssnano = require('gulp-cssnano');
//var gulpif = require('gulp-if');

var path = require('path');
var fs = require('fs');

//var deploypath = 'deploy/app59613473t2/';
var deploywebsitepath = "deploy/";

var paths = {
    image: ['app/images/**/*'],
    html: [
        'app/index.html',
        'app/login.html',
        'app/register.html'
    ],
    style: [
        'app/css/admin.css',
        'app/css/base.css',
        'app/css/common_mobile.css',
        'app/css/common.css',
        'app/css/style_mobile.css',
        'app/css/style.css'
    ],
    prejs: [
        'app/build/index.js',
        'app/build/login.js',
        'app/build/register.js',
        'app/build/vendor1.js'
    ],
    js: [

    ]
};

// process.chdir('..');
// console.log(process.cwd());

gulp.task('clean', function () {
    return gulp
        .src(deploywebsitepath, {
            read: false
        })
        .pipe(clean());
})

gulp.task('imagemin', function () {
    return gulp
        .src(paths.image, {
            base: 'app'
        })
        .pipe(gulp.dest(deploywebsitepath));
})

//replace url of css and js
gulp.task('html', ['prejs','style'], function () {
    var style_manifest = gulp.src("./" + deploywebsitepath + "/style-manifest");
    var js_manifest = gulp.src("./" + deploywebsitepath + "/js-manifest");

    return gulp
        .src(paths.html, {
            base: 'app'
        })
        .pipe(revReplace({
            manifest: style_manifest
        }))
        .pipe(gulp.dest(deploywebsitepath))
        .pipe(revReplace({
            manifest: js_manifest
        }))
        .pipe(gulp.dest(deploywebsitepath));
})

gulp.task('js', function () {
    return gulp.src(paths.js, {
            base: 'app'
        })
        .pipe(gulp.dest(deploywebsitepath));
})

gulp.task('prejs', function () {
    return gulp.src(paths.prejs, {
            base: 'app'
        })
        .pipe(replace('opt: "test"', 'opt: "product"'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(deploywebsitepath))
        .pipe(rev.manifest('js-manifest'))
        .pipe(gulp.dest(deploywebsitepath))
})

gulp.task('style', function() {
    gulp.src(paths.style, {
          base: 'app'
        })
        .pipe(cssnano({zindex: false}))
        .pipe(rev())
        .pipe(gulp.dest(deploywebsitepath))
        .pipe(rev.manifest('style-manifest'))
        .pipe(gulp.dest(deploywebsitepath))
})

gulp.task('copy', ['imagemin', 'js', 'html'])
