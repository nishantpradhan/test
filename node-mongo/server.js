const dotenv = require("dotenv")
const express = require('express')
const app = express()
const db = require('./db/mongodb/mongoUtil')

dotenv.config()

app.get('/', async function (req, res) {
  console.log(db)
  db.connect()
    .then(() => {
      const conn = db.get()
      console.log(db.get('test-project'))
      // console.log(conn())
    })

  // async function run() {
  //   try {
  //     await client.connect();

  //     const database = client.db("test-project");
  //     const haiku = await database.collection("aposDocs").find().limit(1).toArray();

  //     console.log(`A document was inserted with the`, haiku);
  //   } finally {
  //     await client.close();
  //   }
  // }
  // run().catch(console.dir);
  // const data = await client.connect()
  // console.log('data', data)
  //.db.collection('aposDocs').find({}).limit(1)
  res.send(`${'data'}`)
})

app.listen(3000)