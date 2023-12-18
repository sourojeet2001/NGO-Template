let gulp = require('gulp'),
sass = require('gulp-dart-sass'),
cleanCSS = require('gulp-clean-css');
rename = require('gulp-rename');
// const autoprefixer = require('gulp-autoprefixer');
// const autoprefixer = require('autoprefixer');
const autoprefixer = require('autoprefixer-core');
const sourcemaps = require('gulp-sourcemaps');
// const svgSprite = require('gulp-svg-sprite');
const plumber = require('gulp-plumber');
const terser = require('gulp-terser');
const babel = require('gulp-babel');
const $ = require('gulp-load-plugins')()
const postcss = require('gulp-postcss');
const pxtorem = require('postcss-pxtorem');

var config = {
  mode: {
    css: { // Activate the «css» mode
      render: {
        css: true // Activate CSS output (with default options)
      }
    }
  }
};

var paths = {
  styles: {
    src: './scss/**/*.scss',
    dest: './dist/css/'
  },
  js: {
    src: './js/*.js',
    dest: './dist/js/'
  },
  sprites: {
    src: './assets/icons/brands/*.svg',
    dest: './assets/icons/'
  },
  vendor: {
    srcJs: './vendor/**/*.js',
    srcCss: './vendor/**/*.css',
    minCss: '!./vendor/**/*.min.css',
    minJs: '!./vendor/**/*.min.js',
  }
};

const postcssProcessors = [
  pxtorem({
    propList: ['font', 'font-size', 'line-height', 'letter-spacing', '*margin*', '*padding*'],
    mediaQuery: true,
  }),
];
function styles() {
  return gulp.src([paths.styles.src, paths.vendor.srcCss, paths.vendor.minCss])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    // .pipe(autoprefixer({
    //   overrideBrowserslist: ['last 3 versions'],
    //   cascade: false,
    // }))
    // .pipe($.postcss(postcssProcessors))
    // .pipe(postcss([autoprefixer({
    //   browsers: [
    //     'Chrome >= 35',
    //     'Firefox >= 38',
    //     'Edge >= 12',
    //     'Explorer >= 10',
    //     'iOS >= 8',
    //     'Safari >= 8',
    //     'Android 2.3',
    //     'Android >= 4',
    //     'Opera >= 12'],
    // })]))
    .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
    .pipe(cleanCSS())
    .pipe( rename( { suffix: '.min' } ) )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

function sprites() {
  return gulp.src(paths.sprites.src)
  .pipe(svgSprite(config))
  .pipe(gulp.dest(paths.sprites.dest));
}

function minifyjs() {
  return gulp.src([
    paths.js.src,
    paths.vendor.srcJs,
    paths.vendor.minJs,
  ])
    .pipe(plumber())
    .pipe(
      babel({
        presets: [
          [
            '@babel/env',
            {
              modules: false,
            },
          ],
        ],
      }),
    )
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.js.dest));
}


var build = gulp.series(gulp.parallel(styles, minifyjs));
exports.styles = styles;
exports.watch = watch;
exports.sprites = sprites;
exports.build = build;
exports.minifyjs = minifyjs;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;