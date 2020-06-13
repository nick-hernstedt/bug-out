import axios from "axios";

export default {
  // Gets all bugs
  getBugs: function () {
    return axios.get("/api");
  },

  // Gets the bug with the given id

  getBug: function (id) {
    return axios.get("/api/bugs/" + id);
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
    console.log("Anthony's mom's chicken pickata");
    return axios.put("/api/bugs/" + id, bugdata);

  },
};
