let readline = require('readline-sync');
let result = require('./result');
let ask = require('./readline-num');
let operation = require('./readline-op');

ask();
operation();
result();
