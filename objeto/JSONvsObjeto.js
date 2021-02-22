// JSON - JavaScript Object Notation

/* Formato de dados mais usados para interoperabilidade entre sistemas */

const obj = { a: 1, b: 2, c: 3, soma(a, b, c) { return a + b + c } }

//Transformar um Objeto em JSON
console.log(JSON.stringify(obj))

//Transformar um JSON em Objeto
console.log(JSON.parse('{"a":1, "b":2, "c":2}'))
/* Os atrubutos para ter um JSON válido tems que ter
os mesmos em aspas dupla("") */

console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": {}, "e": []}'))
