const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bugSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    assigned: { type: String, default: "Unassigned"},
    inProgress: { type: Boolean, default: false },
    needHelp: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    projectID: {type: String, required: true}
});

const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;
