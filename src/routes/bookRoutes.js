const express = require("express");
const bookRouter = express.Router();

function router(nav) {
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
    res.render("bookListView", {
      nav,
      title: "library",
      books
    });
  });
  bookRouter.route("/:id").get((req, res) => {
    const { id } = req.params;
    res.render("bookView", {
      nav,
      title: "Library",
      book: books[id]
    });
  });
  return bookRouter;
}

module.exports = router; 
