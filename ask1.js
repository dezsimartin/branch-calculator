const ask1 = (a) => {
  let readline = require('readline-sync');
  a = readline.question('Give me the first number!');

  return a;
};

module.exports = ask1;
