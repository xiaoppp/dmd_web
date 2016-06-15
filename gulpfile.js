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

var deploypath = 'deploy/app59613473t2/';
var deploywebsitepath = "deploy/app59613473t2/app/static/";

var paths = {
    flaskfiles: ['backend/config.py', 'backend/index.py', 'backend/requirements.txt'],
    flaskapp: ['backend/app/**/*.py'],
    image: ['frontend/app/img/**/*'],
    html: [
        'frontend/app/before.html',
        'frontend/app/end.html',
        'frontend/app/building.html',
        'frontend/app/fanrob.html',
        'frontend/app/guessing.html',
        'frontend/app/vote.html',
        'frontend/app/card.html',
        'frontend/app/activity.html',

        'frontend/app/member/index.html',
        'frontend/app/member/task.html'

    ],
    style: [
        'frontend/app/style/site.css',
        'frontend/app/style/ionic.css',
        'frontend/app/style/bootstrap.min.css'
    ],
    fonts: [
        'frontend/app/fonts/ionicons.eot',
        'frontend/app/fonts/ionicons.svg',
        'frontend/app/fonts/ionicons.ttf',
        'frontend/app/fonts/ionicons.woff'
    ],
    prejs: [
        'frontend/app/build/before.js',
        'frontend/app/build/building.js',
        'frontend/app/build/fanrob.js',
        'frontend/app/build/guessing.js',
        'frontend/app/build/vote.js',
        'frontend/app/build/card.js',
        'frontend/app/build/activity.js',

        'frontend/app/build/task.js',
        'frontend/app/build/index.js',

        'frontend/app/build/vendor1.js',
        'frontend/app/build/vendor2.js',
        'frontend/app/build/vendor3.js'
    ],
    js: [
        'frontend/app/build/loading.js'
    ]
};

process.chdir('..');
console.log(process.cwd());

gulp.task('clean', function () {
    return gulp.src(deploypath + "/app", {
        read: false
    })
        .pipe(clean());
})

// copy all python files
gulp.task('python', function () {
    gulp
        .src(paths.flaskfiles, {
            base: 'backend'
        })
        .pipe(gulp.dest(deploypath))

    gulp
        .src(paths.flaskapp, {
            base: 'backend/app'
        })
        .pipe(gulp.dest(deploypath + 'app'))
})

gulp.task('imagemin', function () {
    return gulp
        .src(paths.image, {
            base: 'frontend/app'
        })
        .pipe(gulp.dest(deploywebsitepath));
})

//replace url of css and js
gulp.task('html', ['prejs','style','fonts'], function () {
    var style_manifest = gulp.src("./" + deploywebsitepath + "/style-manifest");
    var js_manifest = gulp.src("./" + deploywebsitepath + "/js-manifest");

    return gulp
        .src(paths.html, {
            base: 'frontend/app'
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
            base: 'frontend/app'
        })
        .pipe(gulp.dest(deploywebsitepath));
})

gulp.task('prejs', function () {
    return gulp.src(paths.prejs, {
            base: 'frontend/app'
        })
        .pipe(replace('opt: "test"', 'opt: "product"'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(deploywebsitepath))
        .pipe(rev.manifest('js-manifest'))
        .pipe(gulp.dest(deploywebsitepath))
})

gulp.task('fonts', function() {
    gulp.src(paths.fonts, {
          base: 'frontend/app'
        })
        .pipe(gulp.dest(deploywebsitepath))
})

gulp.task('style', function() {
    gulp.src(paths.style, {
          base: 'frontend/app'
        })
        .pipe(cssnano({zindex: false}))
        .pipe(rev())
        .pipe(gulp.dest(deploywebsitepath))
        .pipe(rev.manifest('style-manifest'))
        .pipe(gulp.dest(deploywebsitepath))
})

gulp.task('copy', ['python', 'imagemin', 'js', 'html'])

gulp.task('git', function () {
    process.chdir('deploy/app59613473t2');
    console.log(process.cwd());

    function add() {
        gulp.src('./*')
            .pipe(git.add());
    }

    function commit() {
        gulp.src('./*')
            .pipe(git.commit('deploy commit'));
    }

    function push() {
        git.push('origin', 'master', function (err) {
            if (err) {
                console.log(err);
            }
        });
    }

    var series = [add, commit, push];

    for (var i = 0; i < series.length; i++) {
        setTimeout(series[i], 1000 * (i + 1));
    }
})

gulp.task('default', ['git']);
