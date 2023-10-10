// CSS & SASS
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as newSass from 'sass'
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const sass = gulpSass(newSass);

const css = () => {
    return gulp.src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
};

const dev = () => {
    gulp.watch('src/scss/**/*.scss', css);
}


export default gulp.series(dev, css);