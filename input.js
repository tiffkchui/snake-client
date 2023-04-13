const { UP_KEY, LEFT_KEY, DOWN_KEY, RIGHT_KEY, MESSAGES } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
    
  if (key === UP_KEY) {
    connection.write('Move: up');
  }
  if (key === LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};


//EXPORT
module.exports = { setupInput };
