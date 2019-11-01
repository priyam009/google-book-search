import axios from "axios";

export default {
  //Get all books from Google Books API
  getBooks: function(query) {
    return axios.get("/api/books/", { params: { q: query } });
  }
};
