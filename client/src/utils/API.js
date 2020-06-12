import axios from "axios";

export default {
  // Gets all bugs
  getBugs: function () {
    return axios.get("/api");
  },

  // Gets the bug with the given id

  getBug: function (id) {
    return axios.get("/api/" + id);
  },
  // Deletes the bug with the given id

  deleteBug: function (id) {
    return axios.delete("/api/" + id);
  },

  // Saves a bug to the database

  saveBug: function (bugData) {
    return axios.post("/api/", bugData);
  },

  updateBug: function (id, bugdata) {
    console.log("ur mom");
    return axios.put("/api/bugs/" + id, bugdata);
  },
};
