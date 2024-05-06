
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';


const app = express()
app.use(express.json())

routes(app);

const start = async () => {
    try {
      await mongoose.connect('mongodb+srv://yuval056:yuval963852@cluster0.ky85dz5.mongodb.net/'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      console.log("Connected to MongoDB");
  
      app.listen(5000, () => {
        console.log("Server is running on port 5000");
      });
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  
  start();
