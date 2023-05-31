const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb').MongoClient

mongodb.connect(process.env.CONNECTIONSTRING, async function(err, client) {
    const db = client.db()
    const prac = db.collection("prac")
    await prac.insertOne({text: "Hauwa", Gnder: "Female", age: 3})
    console.log("info added")
    client.close()
})