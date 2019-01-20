import axios from "axios";

export default {
  // Gets all books
  getBikes: function() {
    return axios.get("/api/bikes");
  },
  // Gets the book with the given id
  getBike: function(id) {
    return axios.get("/api/bikes/" + id);
  },
  // Deletes the book with the given id
  deleteBike: function(id) {
    return axios.delete("/api/bikes/" + id);
  },
  // Saves a book to the database
  saveBike: function(bikesData) {
    return axios.post("/api/bikes", bikesData);
  }
};