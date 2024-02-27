// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función resta', function() {
  operaciones.resta.should.be.a.Function();
  should.equal(operaciones.resta(7,4), 3);
  should.equal(operaciones.resta(1,3), -2);
	should.equal(operaciones.resta(1,3), -2);
});



// Test
it('comprobar función par', function() {
  operaciones.par.should.be.a.Function();
  should.equal(operaciones.par(4), "par");
  should.equal(operaciones.par(3), "impar");
	should.equal(operaciones.par("hola"), "string");
});
