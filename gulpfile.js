/*!
 * gulp
 * $ npm install gulp-minify-css gulp-uglify gulp-add-src gulp-concat gulp-notify gulp-rename gulp-sitemap --save-dev
 */

// load plugins
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uncss = require('gulp-uncss'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sitemap = require('gulp-sitemap'),
    sourcemaps = require('gulp-sourcemaps');


// styles: en
gulp.task('styles-en', function () {
    return gulp.src([
        'en/asset/css/bootstrap.min.css',
        'en/css/font-awesome.min.css',
        'en/css/slicknav.css',
        'en/css/style.css',
        'en/css/responsive.css',
        'en/css/animate.css',
        'en/css/colors/jade.css'])
        .pipe(concat('viplaunch.css'))
        .pipe(uncss({
            html: ['en/**/index.html']
        }))
        .pipe(minifycss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('en/css'))
        .pipe(notify({message: 'styles-en task complete'}));
});

// script: en
gulp.task('scripts-en', function () {
    return gulp.src([
        'en/js/jquery-2.1.4.js',
        'en/js/jquery.migrate.js',
        'en/js/modernizrr.js',
        'en/asset/js/bootstrap.js',
        'en/js/jquery.fitvids.js',
        'en/js/owl.carousel.js',
        'en/js/nivo-lightbox.js',
        'en/js/jquery.isotope.js',
        'en/js/jquery.appear.js',
        'en/js/count-to.js',
        'en/js/jquery.textillate.js',
        'en/js/jquery.lettering.js',
        'en/js/jquery.nicescroll.js',
        'en/js/jquery.slicknav.js',
        // 'en/js/jquery.easypiechart.js',
        // 'en/js/jquery.parallax.js',
        // 'en/js/mediaelement-and-player.js',
        'en/js/script.js'])
        .pipe(concat('viplaunch.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('en/js'))
        .pipe(notify({message: 'en-script task complete'}));
});



// style: zh
gulp.task('zh-style-clean', function () {
    return gulp.src([
        'zh/css/slicknav.css',
        'zh/css/style.css',
        'zh/css/responsive.css',
        'zh/css/animate.css',
        'zh/css/colors/jade.css'])
        .pipe(concat('viplaunch.css'))
        .pipe(uncss({
            html: ['zh/**/index.html', 'http://www.viplaunch.sg']
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('zh/css'))
        .pipe(notify({message: 'zh-style-clean task complete'}));
});

gulp.task('zh-style-minify', function () {
    return gulp.src([
        'zh/css/viplaunch.min.css',
        ])
        .pipe(minifycss())
        .pipe(gulp.dest('zh/css'))
        .pipe(notify({message: 'zh-style-minify task complete'}));
});

// script
gulp.task('zh-script', function () {
    return gulp.src([
        'zh/js/jquery-2.1.4.js',
        'zh/js/jquery.migrate.js',
        'zh/js/modernizrr.js',
        'zh/asset/js/bootstrap.js',
        'zh/js/jquery.fitvids.js',
        'zh/js/owl.carousel.js',
        'zh/js/nivo-lightbox.js',
        'zh/js/jquery.isotope.js',
        'zh/js/jquery.appear.js',
        'zh/js/count-to.js',
        'zh/js/jquery.textillate.js',
        'zh/js/jquery.lettering.js',
        'zh/js/jquery.nicescroll.js',
        'zh/js/jquery.slicknav.js',
        // 'zh/js/jquery.easypiechart.js',
        // 'zh/js/jquery.parallax.js',
        // 'zh/js/mediaelement-and-player.js',
        'zh/js/script.js'])
        .pipe(concat('viplaunch.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('zh/js'))
        .pipe(notify({message: 'zh-script task complete'}));
});




// sitemap
gulp.task('sitemap', function () {
    gulp.src('**/index.html')
        .pipe(sitemap({
            siteUrl: 'http://www.viplaunch.sg',
            changefeq: 'daily'
        }))
        .pipe(gulp.dest('./'))
        .pipe(notify({message: 'sitemap task complete'}));;
});


