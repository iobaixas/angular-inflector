/**
 * Angular inflection library
 * @version v0.0.3 - 2013-12-09
 * @link https://github.com/platanus/angular-inflector
 * @author Ignacio Baixas <ignacio@platan.us>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function(angular, undefined) {
'use strict';
angular.module('platanus.inflector', [])
  // Various string manipulation functions
  .factory('$inflector', function () {
    return {
      // Attempts to transform a string to camelcase, removing every space, dash and underscore
      camelize: function(_string, _constant) {
        if (typeof _string !== 'string') return _string;
        return _string.replace(/(?:^[-_\s]*|[-_\s]+)([A-Z\d])/gi, function (match, _first, _index) {
          return (!_constant && _index === 0) ? _first : _first.toUpperCase();
        });
      },
      // Transforms a camelcase string to a snakecase string
      // The default separator is '-'
      parameterize: function(_string, _sep) {
        if (typeof _string !== 'string') return _string;
        return _string.replace(/[A-Z]/g, function (_match, _index) {
          return _index === 0 ? _match : (_sep || '-') + _match;
        }).toLowerCase();
      },
      // Transforms a string to snakecase, replaces every space, dash and undercore by the provided separator.
      // The default separator is '-'
      dasherize: function(_string, _sep) {
        return _string.replace(/[-_\s]+/g, _sep || '-');
      }
    };
  });

})(angular);