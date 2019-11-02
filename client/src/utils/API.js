import axios from "axios";

export default {
  //Get all books from Google Books API
  googleBooks: function(query) {
    return axios.get("/api/books/google", { params: { q: query } });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    // console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
