const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("req", req.query);
  const apiKey = "AIzaSyAOLhDUYDH4kz5qkq_n1zhO6QLvCsxe4DQ";
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=" + req.query + "&key=" + apiKey
    )
    // .get("https://www.googleapis.com/books/v1/volumes?q=game&key=AIzaSyBymZZ_4KpRi_3VkDn653yZiq-lW3Dq-w8")
    .then(result => res.json(result.data))
    .catch(err => res.status(422).json(err));

});

module.exports = router;
