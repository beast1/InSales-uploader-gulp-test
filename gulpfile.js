var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var watch = require('gulp-watch');

var options = {
  account: {
    id: '61d18b6819951ded26492e1af86a813f',
    token: 'f30324304e4f50726b382ab556264862',
    url: 'wadge.ru',
    http: true
  },
  theme: {
    id: '779284',
    root: 'project',
    backup: 'zip',
    update: true,
    startBackup: true
  },
  tools:{
    openBrowser: {
      start: false
    },
    browserSync: {
      start: true
    }
  }
}

var InsalesUploader = new insalesUp(options)

gulp.task('download', function(){
  return InsalesUploader.download()
});

gulp.task('pull', function(){
  return InsalesUploader.pullTheme()
});

gulp.task('push', function(){
  return InsalesUploader.pushTheme()
});

gulp.task('stream', function(){
  return InsalesUploader.stream()
});

gulp.task('watch', function(){
  return watch(InsalesUploader.paths.toWatch, function (_vinyl) {
    InsalesUploader.triggerFile(_vinyl.event, _vinyl.path);
  });
});

gulp.task('backup', function(){
  return InsalesUploader.backup()
});

gulp.task('diff-assets', function(){
  return InsalesUploader.diffLocalAssets()
});

gulp.task('init-assets', function(){
  return InsalesUploader.initAssets()
});

gulp.task('upload', function(){
  return InsalesUploader.upload({
    update: true
  })
});

gulp.task('open-browser', function(){
  return InsalesUploader.openBrowser()
});

gulp.task('default', ['download'], function() {
  return gulp.start('stream');
});

