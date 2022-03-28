const {src, dest, watch, series} = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

function minifyJS(){
	return src('pre-gulp/assets/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(terser())
	.pipe(sourcemaps.write('./'))
	.pipe(dest('public/js'));
}

function watchTask(){
	watch('public/js/*.js', minifyJS)
}

exports.default = series(minifyJS, watchTask);