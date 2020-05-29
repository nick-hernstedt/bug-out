import axios from "axios";

export default {
  // Gets all bugs
  getBugs: function() {
    return axios.get("/api");
  },
  // Gets the bugs with the given id
  getBug: function(id) {
    return axios.get("/api/" + id);
  },
  // Deletes the bugs with the given id
  deleteBug: function(id) {
    return axios.delete("/api/" + id);
  },
  // Saves a bugs to the database
  saveBug: function(bugData) {
    return axios.post("/api/", bugData);
  }
};
