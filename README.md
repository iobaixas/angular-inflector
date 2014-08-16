Platanus Angular Inflector Utilities [![Build Status](https://secure.travis-ci.org/platanus/angular-inflector.png)](https://travis-ci.org/platanus/angular-inflector)
===============

Small suite of inflector functions, hopefully this lib will no longer be needed when angular makes the inflector functions they use part of the public api.

## Installation:

**Optional** Use bower to retrieve package

```
bower install angular-inflector --save
```

Include angular module

```javascript
angular.module('platanus.inflector')
```

## Usage

This library registers the `$inflector` service, the following methods are provided by the service.

```html
$inflector.capitalize('the-snake'); // should output TheSnake
$inflector.parameterize('TheCamel'); // should output the-camel
$inflector.parameterize('TheCamel', '_'); // should output the_camel
$inflector.dasherize('the_snake'); // should output the-snake
$inflector.dasherize('the_snake', '&'); // should output the&snake
```
