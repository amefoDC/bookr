const express = require("express");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:adminRoutes");

const adminRouter = express.Router();

const books = [
  {
    title: "War and peace",
    genre: "Historical Fiction",
    author: "Lev Nikolayevich Tolstoy",
    read: false
  },
  {
    title: "Les Miserables",
    genre: "Historical Fiction",
    author: "Victor Hugo",
    read: false
  },
  {
    title: "War and peace",
    genre: "Historical Fiction",
    author: "Lev Nikolayevich Tolstoy",
    read: false
  },
  {
    title: "THe time Machine",
    genre: "Science Fiction",
    author: "Jules Veerne",
    read: false
  },
  {
    title: "The Dark World",
    genre: "Fantasy",
    author: "Henry Cutner",
    read: false
  },
  {
    title: "The wind in the Willows",
    genre: "Fantay",
    author: "Kenneth Grahame",
    read: false
  },
  {
    title: "Life on the Mission",
    genre: "History",
    author: "Mark Twain",
    read: false
  },
  {
    title: "Childhold",
    genre: "Biography",
    author: "Lev Nikolayevich Tolstoy",
    read: false
  }
];

function router(nav) {
  adminRouter.route("/").get((req, res) => {
    const url = "mongodb://localhost:27017";
    const dbName = "bookrApp";

    (async function mongo() {
      let client;
      try {
        client = await MongoClient.connect(url);
        debug("Connected correctly to server");

        const db = client.db(dbName);

        const response = await db.collection("books").insertMany(books);
        res.json(response);
      } catch (err) {
        debug(err.stack);
      }
      client.close();
    })();
  });
  return adminRouter;
}

module.exports = router;
