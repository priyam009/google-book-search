import axios from "axios";

export default {
  //Get all books from Google Books API
  getBooks: function(query) {
    return axios.get("/api/books/", { params: { q: query } });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
