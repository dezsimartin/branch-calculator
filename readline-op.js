const which = (op) => {
  let readline = require('readline-sync');
  op = readline.question('Milyen műveletet szeretnél elvégezni a megadott számokkal?');
  return op;
};

module.exports = which;
