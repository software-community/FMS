const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate emails in the database
    trim: true, // Removes any extra spaces from the input
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Regex for email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensures the password is at least 6 characters
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date and time
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
