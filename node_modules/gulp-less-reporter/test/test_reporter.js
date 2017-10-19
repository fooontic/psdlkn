var path = require('path');
var fs = require('fs');
var sinon = require('sinon');
var gutil = require('gulp-util');
var less = require('gulp-less');

var reporter = require('../');

function createVinyl(lessFileName, contents) {
    var base = path.join(__dirname, 'fixtures');
    var filePath = path.join(base, lessFileName);

    return new gutil.File({
      cwd: __dirname,
      base: base,
      path: filePath,
      contents: contents || fs.readFileSync(filePath)
    });
}

describe('gulp-less-reporter', function () {
  it('should print an error when less contains errors', function (done) {
    var stream = less();

    var errorFile = createVinyl('somefile.less',
      new Buffer('html { \ncolor: @undefined-variable; \n}'));

    stream.once('error', function(err) {
      var logMock = sinon.mock(gutil).expects('log');
      logMock.once();
      reporter(err);
      logMock.verify();
      done();
    });
    stream.write(errorFile);
    stream.end();
  });
});
