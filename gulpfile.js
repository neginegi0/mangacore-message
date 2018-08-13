'use strict';

var gulp = require('gulp');
var mangacoreTasks = require('mangacore-build');

mangacoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
