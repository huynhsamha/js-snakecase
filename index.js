'use strict';

function toSnakeCase(str) {

	if (!str && str != '') return null;

	return String(str)
		.replace(/^[^A-Za-z]*|[^A-Za-z0-9]*$/g, '')
		.replace(/([a-z])([A-Z])/g, (m, a, b) => a + '_' + b.toLowerCase())
		.replace(/[^A-Za-z0-9]+|_+/g, '_')
		.toLowerCase();

}

module.exports = toSnakeCase;
