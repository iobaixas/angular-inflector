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
});

