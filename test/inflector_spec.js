'use strict';

describe('', function() {

  beforeEach(module('platanus.inflector'));

  describe('camelize', function() {
    it('should camelize', inject(function($inflector) {
      expect($inflector.camelize('snake-case')).toEqual('snakeCase');
      expect($inflector.camelize('snake_case')).toEqual('snakeCase');
      expect($inflector.camelize('spaced case')).toEqual('spacedCase');
      expect($inflector.camelize('dashed-constant', true)).toEqual('DashedConstant');
    }));
  });

  describe('parameterize', function() {
    it('should parameterize', inject(function($inflector) {
      expect($inflector.parameterize('CamelCase')).toEqual('camel-case');
      expect($inflector.parameterize('CamelCase', '_')).toEqual('camel_case');
    }));

    it('should parameterize numbers correctly', inject(function($inflector) {
      expect($inflector.parameterize('CamelCase1')).toEqual('camel-case-1');
      expect($inflector.parameterize('CamelCase20')).toEqual('camel-case-20');
      expect($inflector.parameterize('Camel10Case20')).toEqual('camel-10-case-20');
    }));
  });

  describe('dasherize', function() {
    it('should dasherize', inject(function($inflector) {
      expect($inflector.dasherize('snake_case')).toEqual('snake-case');
      expect($inflector.dasherize('spaced case')).toEqual('spaced-case');
    }));
  });

  describe('pluralize', function() {
    it('should pluralize', inject(function($inflector) {
      expect($inflector.pluralize('snake')).toEqual('snakes');
      expect($inflector.pluralize('Water')).toEqual('Water');
      expect($inflector.pluralize('MOUSE')).toEqual('Mice'); // capital letter are not preserved.
      expect($inflector.pluralize('Index')).toEqual('Indexes');
    }));
  });

  describe('singularize', function() {
    it('should singularize', inject(function($inflector) {
      expect($inflector.singularize('snakes')).toEqual('snake');
      expect($inflector.singularize('Water')).toEqual('Water');
      expect($inflector.singularize('MICE')).toEqual('Mouse'); // capital letter are not preserved.
      expect($inflector.singularize('Indexes')).toEqual('Index');
    }));
  });
});

