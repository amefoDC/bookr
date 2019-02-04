const express = require("express");
const bookRouter = express.Router();

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

bookRouter.route("/").get((req, res) => {
  res.render("books", {
    nav: [
      { link: "/books", title: "Books" },
      { link: "/authors", title: "Authors" }
    ],
    title: "library",
    books
  });
});

bookRouter.route("/single").get((req, res) => {
  res.send("Hello single books");
});

module.exports = bookRouter;
