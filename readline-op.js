const which = () => {
  let readline = require('readline-sync');
  let operation = readline.question('Milyen műveletet szeretnél elvégezni a megadott számokkal?');
  return operation;
};

module.exports = which;
