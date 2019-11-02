require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.get("/google", (req, res) => {
  const apiKey = process.env.BOOKS_KEY;
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        req.query.q +
        "&key=" +
        apiKey
    )
    .then(result => res.json(result.data))
    .catch(err => res.status(422).json(err));
});

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id").delete(booksController.remove);

module.exports = router;
