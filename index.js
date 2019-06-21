
let multiple = require('./multiple');
let ask1 = require('./ask1');
let ask2 = require('./ask2');
let op = require('./readline-op');
let div = require('./div');
let a;
let b;

let eredmeny;

/* console.log(ask(a, b));
console.log(operation(op));
console.log(div(ask(Number(a), Number(b))));
// result();
*/

if (op() === '/') {
  eredmeny = div(Number(ask1(a)), Number(ask2(b)));
}
if (op() === '*') {
  eredmeny = multiple(Number(ask1(a)), Number(ask2(b)));
}

console.log(eredmeny);
