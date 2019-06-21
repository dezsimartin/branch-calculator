const which = () => {
  let operation = readline.question('Milyen műveletet szeretnél elvégezni a megadott számokkal?');
  return operation;
};

module.exports = which;
