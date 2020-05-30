const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectTitle: { type: String, required: true },
  bugs: []
});
