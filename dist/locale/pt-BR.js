/**
 * Angular inflection library
 * @version v0.2.3 - 2015-11-03
 * @link https://github.com/platanus/angular-inflector
 * @author Ignacio Baixas <ignacio@platan.us>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function(angular, undefined) {
'use strict';
angular.module('platanus.inflector')
/**
 * pt-BR rules by Daniel Fernando Lourusso
 */
.config(['inflectorProvider', function (inflectorProvider) {
  inflectorProvider.registerLocale('pt-BR', {
    uncountable: ['tórax', 'tênis', 'ônibus', 'lápis', 'fênix' ],

    plural: [
      [new RegExp('^(japon|escoc|ingl|dinamarqu|fregu|portugu)(es|ês)', 'gi'), '$1eses'],
      [new RegExp('([^aeou])il$', 'gi'),                                       '$1is'],
      [new RegExp('^(paí)s$', 'gi'),                                           '$1ses'],
      [new RegExp('(z|r)$', 'gi'),                                             '$1es'],
      [new RegExp('al$', 'gi'),                                                'ais'],
      [new RegExp('el$', 'gi'),                                                'eis'],
      [new RegExp('ol$', 'gi'),                                                'ois'],
      [new RegExp('ul$', 'gi'),                                                'uis'],
      [new RegExp('m$', 'gi'),                                                 'ns'],
      [new RegExp('^(|g)ás$', 'gi'),                                           '$1ases'],
      [new RegExp('^(alem|c|p)ão$', 'gi'),                                     '$1ães'],
      [new RegExp('(irm|m)ão$', 'gi'),                                         '$1ãos'],
      [new RegExp('ão$', 'gi'),                                                '$1ões'],

      [new RegExp('^(alem|c|p)ao$', 'gi'),                                     '$1aes'],
      [new RegExp('^(irm|m)ao$', 'gi'),                                        '$1aos'],
      [new RegExp('ao$', 'gi'),                                                'oes'],

      [new RegExp('s$', 'gi'),                                                 's'],
      [new RegExp('$', 'gi'),                                                  's']
    ],

    singular: [
      [new RegExp('^(á|gá|paí)ses$', 'gi'),                                    '$1s'],
      [new RegExp('(r|z)es$', 'gi'),                                           '$1'],
      [new RegExp('([^p])ais$', 'gi'),                                         '$1al'],
      [new RegExp('eis$','gi'),                                                'el'],
      [new RegExp('ois$','gi'),                                                'ol'],
      [new RegExp('uis$','gi'),                                                'ul'],
      [new RegExp('(r|t|f|v)is$','gi'),                                        '$1il'],
      [new RegExp('ns$', 'gi'),                                                'm'],
      [new RegExp('sses$', 'gi'),                                              'sse'],
      [new RegExp('^(.*[^s]s)es$', 'gi'),                                      '$1'],
      [new RegExp('ães$', 'gi'),                                               'ão'],
      [new RegExp('aes$', 'gi'),                                               'ao'],
      [new RegExp('ãos$', 'gi'),                                               'ão'],
      [new RegExp('aos$', 'gi'),                                               'ao'],
      [new RegExp('ões$', 'gi'),                                               'ao'],
      [new RegExp('oes$', 'gi'),                                               'ao'],
      [new RegExp('(japon|escoc|ingl|dinamarqu|fregu|portugu)eses$', 'gi'),    '$1es'],
      [new RegExp('^(g|)ases$', 'gi'),                                         '$1as'],
      [new RegExp('([^ê])s$', 'gi'),                                           '$1'],
      [new RegExp('s$', 'gi'),                                                 '']
    ]
  });
}]);
})(angular);