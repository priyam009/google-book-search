const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.get("/", (req, res) => {
  console.log("req", req.query.q);
  const apiKey = "AIzaSyAOLhDUYDH4kz5qkq_n1zhO6QLvCsxe4DQ";

  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&key=" + apiKey
    )
    .then(result => res.json(result.data))
    .catch(err => res.status(422).json(err));

});

router.route("/").post(booksController.create);

module.exports = router;
