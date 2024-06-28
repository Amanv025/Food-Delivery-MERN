import express from "express";
import { fetch , create ,update, deleteUser,login,fetchProfileData} from "../controller/userController.js";
import cors from "cors";
import Stripe from "stripe";
const route =express.Router();
const stripe= new Stripe(process.env.STRIPE_SECRET_KEY);
route.use(cors());
route.post("/create",create);
route.get("/getAllUsers",fetch);
route.get("/profiledata/:email",fetchProfileData);
route.put("/update/:id",update);
route.post("/login", login);
route.delete("/delete/:id",deleteUser);
route.post("/create-checkout-session", async (req, res) => {
    try {
      const { products } = req.body;
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1
      }));
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "https://www.google.com/",
        cancel_url: "https://www.youtube.com/"
      }, {
        // Add API key to request headers
        apiKey: process.env.STRIPE_SECRET_KEY
      });
      res.json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Failed to create checkout session' });
    }
  });
  
  
export default route;