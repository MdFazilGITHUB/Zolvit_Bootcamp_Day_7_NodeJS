require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("demoDB");
    const collection = db.collection("users");

    // Insert one document
    const user = { name: "Fazil", email: "fazil@example.com" };
    const result = await collection.insertOne(user);
    console.log("Inserted:", result.insertedId);

    // Retrieve documents
    const users = await collection.find().toArray();
    console.log("All Users:", users);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
