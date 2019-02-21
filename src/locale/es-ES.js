angular.module('platanus.inflector')
/**
 * es-CL rules by Francisco Arévalo
 */
.config(['inflectorProvider', function (inflectorProvider) {
  inflectorProvider.registerLocale('es-CL', {
    uncountable: ['tórax', 'tenis', 'fénix' ],
    plural: [
      [new RegExp('^(japon|escoc|ingl|dinamarqu|fregu|portugu)(es)', 'gi'), '$1eses'],
      [new RegExp('(z)$', 'gi'),                                            '$1ces'],
      [new RegExp('(r)$', 'gi'),                                            '$1es'],
      [new RegExp('([^aeéiou])$', 'gi'),                                    '$1es'],
      [new RegExp('^(paí)s$', 'gi'),                                        '$1ses'],
      [new RegExp('s$', 'gi'),                                              's'],
      [new RegExp('$', 'gi'),                                               's']
    ],

    singular: [
      [new RegExp('^(á|gá|paí)ses$', 'gi'),                                 '$1s'],
      [new RegExp('(japon|escoc|ingl|dinamarqu|fregu|portugu)eses$', 'gi'), '$1es'],
      [new RegExp('^(g|)ases$', 'gi'),                                      '$1as'],
      [new RegExp('(ces)$', 'gi'),                                          'z'],
      [new RegExp('es$', 'gi'),                                             ''],
      [new RegExp('s$', 'gi'),                                              '']
    ]
  });
}]);
