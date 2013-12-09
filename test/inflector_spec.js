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
  });

  describe('dasherize', function() {
    it('should dasherize', inject(function($inflector) {
      expect($inflector.dasherize('snake_case')).toEqual('snake-case');
      expect($inflector.dasherize('spaced case')).toEqual('spaced-case');
    }));
  });
});

