
let result = require('./result');
let ask1 = require('./readline-num');
let ask2 = require('./ask2');
let operation = require('./readline-op');
let div = require('./div');
let a;
let b;
let op = '';
let eredmeny;

/* console.log(ask(a, b));
console.log(operation(op));
console.log(div(ask(Number(a), Number(b))));
// result();
*/

eredmeny = div(Number(ask1(a)), Number(ask2(b)));
console.log(eredmeny);
