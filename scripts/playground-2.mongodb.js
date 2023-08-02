/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("mongodbVSCodePlaygroundDB");

// Define a function to insert or update items with the same name.
function insertOrUpdateItem(item) {
  // Search for an existing item with the same name.
  const existingItem = db.getCollection("list").findOne({ item: item.item });

  if (existingItem) {
    // Update the existing item.
    db.getCollection("list").updateOne(
      { _id: existingItem._id },
      { $set: item }
    );
  } else {
    // Insert the new item.
    db.getCollection("list").insertOne(item);
  }
}

// Insert or update a few documents into the collection.
insertOrUpdateItem({
  name: 'Nyatasha Nyanners',
  username: 'NyanNyanners',
  description:
    'Nyanners is a gentle, sensitive, and often energetic catgirl with a good sense of humor. However, her claims of being "seiso" or pure are offset by a tendency to use toilet jokes and reference adult, and often vastly obscure, topics. This contrast between pure and crude is considered by fans to be a defining aspect of Nyan\'s appeal. ',
  language: 'English',
  colorScheme: 'rgb(174, 96, 193)',
  social_media: [
    {
      icon: 'faYoutube',
      url: 'https://www.youtube.com/nyanners',
    },
    {
      icon: 'faTwitch',
      url: 'https://www.twitch.tv/nyanners',
    },
    {
      icon: 'faTwitter',
      url: 'https://twitter.com/NyanNyanners',
    },
    {
      icon: 'faDiscord',
      url: 'https://discord.com/invite/nyakuza',
    },
  ],
});

// Search for items by name and print all the items found.
const itemName = "NyanNyanners"; // Change this to the desired item name.

const itemsWithName = db.getCollection("list").find({ username: itemName });

// Create an array to store the results.
const results = [];

while (itemsWithName.hasNext()) {
  const item = itemsWithName.next();
  delete item.date; // Remove the date field from the item object.
  results.push(item);
}

// Output the results to the Playground Result file.
results;
