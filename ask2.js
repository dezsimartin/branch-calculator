const ask2 = (b) => {
  let readline = require('readline-sync');
  b = readline.question('Give me the second number!');
  return b;
};

module.exports = ask2;
