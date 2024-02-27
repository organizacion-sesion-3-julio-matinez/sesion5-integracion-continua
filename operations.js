/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};

// Funcion par

var par = function par (a) {
	if (typeof(a) === 'string') {
        return "string";
    }
    if (a% 2 === 0) {
        return "par";
    }
    return "impar";
};

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	par
}

