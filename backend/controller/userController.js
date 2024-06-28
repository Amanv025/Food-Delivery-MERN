
import User from "../model/userModel.js";

export const create = async(req, res)=>{
    try {
        // Create a new User instance with the request body
        const userData = new User( req.body);
        const {email} = userData;
        // Check if a user with the same email already exists
        const userExist = await User.findOne({email})
        if (userExist){
            return res.status(400).json({message : "User already exists."})
        }
        // Save the new user data into the database
        const savedUser = await userData.save();
        // Send a success response with the saved user data
        res.status(200).json(savedUser)
    } catch (error) {
        // Handle any errors and send an internal server error response
        res.status(500).json({error : "Internal Server Error. "})
    }
}


export const fetch = async (req, res) => {
    try {
        // Fetch user data from the database
        const users=await User.find();
        if(users.length===0){
            return res.status(404).json({message:"user not found"});
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error in fetch function:", error);
        res.status(500).json({error});
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists with the provided email and password
      const user = await User.findOne({ email, password });
  
      if (user) {
        // User found, return success response
        res.status(200).json({ message: "Login successful", user });
      } else {
        // User not found or invalid credentials, return error response
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      // Handle any errors
      console.error("Error in login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
//to fetch the profile data for the profile section
// api.js
export const fetchProfileData = async (req, res) => {
    try {
      console.log("Request received:", req.params);
      const E = req.params.email;
      console.log("Searching for user with email:", E);
      const userExist = await User.findOne({ email: E });
      console.log("User found:", userExist);
      if (!userExist) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(userExist);
    } catch (error) {
      console.error("Error in fetchProfileData:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findOne({_id:id})
        if(!userExist){
            res.status(404).json({message:"User not found"});
        }
        const updateUser= await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}
export const deleteUser= async (req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findOne({_id:id})
        if(!userExist){
            res.status(404).json({message:"User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message:"user deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}