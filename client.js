const net = require("net");


const connect = function () {
  const conn = net.createConnection({
      host: '165.227.47.243',
      port: 50541
    }); 

    conn.setEncoding('utf8');
    
  conn.on('connect', () => {
    console.log('🐍🐍snek-ily connected🐍🐍');
    conn.write('Name: SGY');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  conn.setEncoding("utf8");
  return conn;

};

console.log("Connecting ...");
connect(); 

module.exports = { connect };