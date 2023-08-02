import { MongoClient } from 'mongodb';

// Define a function to insert or update items with the same name.
async function insertOrUpdateItem(item: any) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('mongodbVSCodePlaygroundDB'); // Replace 'mongodbVSCodePlaygroundDB' with your desired database name.
    const collection = database.collection('list'); // Replace 'list' with your desired collection name.

    // Search for an existing item with the same name.
    const existingItem = await collection.findOne({ username: item.username });

    if (existingItem) {
      // Update the existing item.
      await collection.updateOne({ _id: existingItem._id }, { $set: item });
    } else {
      // Insert the new item.
      await collection.insertOne(item);
    }

    console.log('Data inserted or updated successfully!');
  } catch (err) {
    console.error('Error inserting or updating data:', err);
  } finally {
    // Close the connection to the MongoDB server.
    client.close();
  }
}

async function run() {
  const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI.

  // Insert or update the item in the collection.
  const item = {
    // Your JSON-like data here.
  };

  await insertOrUpdateItem(item);

  // Search for items by name and print all the items found.
  const itemName = 'NyanNyanners'; // Change this to the desired item name.

  const client = new MongoClient(uri);
  try {
    await client.connect();

    const database = client.db('mongodbVSCodePlaygroundDB'); // Replace 'mongodbVSCodePlaygroundDB' with your desired database name.
    const collection = database.collection('list'); // Replace 'list' with your desired collection name.

    const itemsWithName = await collection.find({ username: itemName }).toArray();

    // Create an array to store the results.
    const results = itemsWithName.map((item) => {
      delete item.date; // Remove the date field from the item object.
      return item;
    });

    console.log(results);
  } catch (err) {
    console.error('Error searching for items:', err);
  } finally {
    // Close the connection to the MongoDB server.
    client.close();
  }
}

run();
