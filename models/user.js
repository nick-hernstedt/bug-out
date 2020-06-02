// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const mongoose = require("mongoose")
const Schema = mongoose.Schema 
// Creating our User model

  const UserSchema = new Schema({
    // The name cannot be null, and must be a proper email before creation
    project: {
      type: String,
      required: true,
    },
    // The password cannot be null
    password: {
      type: String,
      required: true
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  
  const User = mongoose.model("User", UserSchema);

module.exports = User;
