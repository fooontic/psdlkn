var gutil = require('gulp-util');


module.exports = function gulpLessReporter(err) {
  var generateLine = function generateLine(line, lineNumber) {
    // undefined means there is no line. For example, the 1st and 3rd element are
    // undefined if the file contains only one-line.
    return line !== undefined ? '\n        ' + lineNumber + ' ' + line : '';
  };

  var extract = err.extract;
  var lineNumber = err.lineNumber;
  var hint = [
    generateLine(extract[0], lineNumber - 1),
    generateLine(extract[1], lineNumber),
    generateLine(extract[2], lineNumber + 1),
  ].join('');

  // Put the plugin name prefix to follow the gulp-way.
  gutil.log('gulp-less: ' + gutil.colors.red(err.message) + '\n' + hint);
};
