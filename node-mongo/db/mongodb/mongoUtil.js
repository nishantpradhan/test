let connection = null;
const MongoClient = require('mongodb').MongoClient
module.exports.connect = () => new Promise((resolve, reject) => {
  MongoClient.connect(process.env.MONGODB_CONN_URI, {}, function (err, db) {
    if (err) {
      reject(err);
      return;
    };
    resolve(db);
    connection = db;
  });
});

module.exports.get = () => {
  if (!connection) {
    throw new Error('Call connect first!');
  }

  return connection;
}