const toSnakeCase = require('../index');

console.log(toSnakeCase('string')); // => string
console.log(toSnakeCase('camelCase')); // => camel_case
console.log(toSnakeCase('param-case')); // => param_case
console.log(toSnakeCase('PascalCase')); // => pascal_case
console.log(toSnakeCase('UPPER_CASE')); // => upper_case
console.log(toSnakeCase('snake_case')); // => snake_case
console.log(toSnakeCase('sentence case')); // => sentence_case
console.log(toSnakeCase('Title Case')); // => title_case
console.log(toSnakeCase('dot.case')); // => // dot_case

console.log(toSnakeCase('')); // => [empty string]
console.log(toSnakeCase(null)); // => null
console.log(toSnakeCase(undefined)); // => null

console.log(toSnakeCase('Abc ___ 123 ___ xYz')); // => abc_123_x_yz
console.log(toSnakeCase('123__abc  ... ?// {#} def 12')); // => abc_def_12
console.log(toSnakeCase('	tab space ??? ________')); // => tab_space
console.log(toSnakeCase('___?||123  abc|| 123..123')); // => abc_123_123
console.log(toSnakeCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc_xy_z_g123h
console.log(toSnakeCase(' ^&* #DEFine x: 15 + ==')); // => define_x_15
console.log(toSnakeCase('123456789')); // => [empty string]
