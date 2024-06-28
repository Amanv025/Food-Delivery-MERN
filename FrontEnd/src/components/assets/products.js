// data/product.js
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import dosa from '../assets/dosa.jpg';
import sandwich from '../assets/sandwich.jpg';
import paneer from '../assets/paneer.jpg';
import drinks from '../assets/drinks.jpg';
import momo from '../assets/momo.jpg';
import biriyani from '../assets/biriyani.jpg';
import pasta from '../assets/pasta.jpg';

const products = [
  {
    name: "Gourmet Supreme Pizza",
    image: pizza,
    price: 199,
    rating: 4.5,
    restaurant: "Italian Delight",
    deliveryTime: "30-45 minutes",
    location: "Kolkata"
  },
  {
    name: "Prime Burger",
    image: burger,
    price: 120,
    rating: 4.0,
    restaurant: "Burger Haven",
    deliveryTime: "20-35 minutes",
    location: "Pune"
  },
  {
    name: "Authentic Masala Dosa",
    image: dosa,
    price: 99,
    rating: 4.2,
    restaurant: "South Indian Treats",
    deliveryTime: "25-40 minutes",
    location: "Hyderabad"
  },
  {
    name: "Classic Club Sandwich",
    image: sandwich,
    price: 120,
    rating: 4.2,
    restaurant: "Café Bites",
    deliveryTime: "15-30 minutes",
    location: "Kolkata"
  },
  {
    name: "Exotic Paneer Tikka Delight",
    image: paneer,
    price: 225,
    rating: 4.2,
    restaurant: "Spice Route",
    deliveryTime: "35-50 minutes",
    location: "Hyderabad"
  },
  {
    name: "Refreshing Summer Mocktails",
    image: drinks,
    price: 155,
    rating: 4.2,
    restaurant: "Cool Quenchers",
    deliveryTime: "10-25 minutes",
    location: "Pune"
  },
  {
    name: "Spicy Momo Platter",
    image: momo,
    price: 150,
    rating: 4.3,
    restaurant: "Himalayan Delights",
    deliveryTime: "25-40 minutes",
    location: "Kolkata"
  },
  {
    name: "Flavorful Biriyani",
    image: biriyani,
    price: 180,
    rating: 4.4,
    restaurant: "Biryani Junction",
    deliveryTime: "30-45 minutes",
    location: "Hyderabad"
  },
  {
    name: "Creamy Pasta",
    image: pasta,
    price: 160,
    rating: 4.2,
    restaurant: "Pasta Paradise",
    deliveryTime: "20-35 minutes",
    location: "Pune"
  }
];

export { products };
