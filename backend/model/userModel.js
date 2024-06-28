import mongoose from "mongoose";

// Define the schema for the user entity
const userSchema = new mongoose.Schema({
  // Define the name property with type String and required constraint
  name: {
    type: String,
    required: true,
  },
  // Define the email property with type String and required constraint
  email: {
    type: String,
    required: true,
  },
  // Define the password property with type String and required constraint
  password: {
    type: String,
    required: true,
  },
});
// Create and export the Mongoose model for the "users" collection based on the userSchema
export default mongoose.model("users", userSchema);