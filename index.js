var path = require('path');
var mickeyPath = require.resolve('./_mickey.scss');

var mickeyDir = path.dirname(mickeyPath);

function includePaths() {
  return [mickeyDir];
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
      var paths  = Array.prototype.slice.call(arguments);
      var result = [].concat.apply(includePaths(), paths);
      return result;
    }

};
