import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Importing routes using ES module syntax
import authRoutes from './routes/auth.js';

mongoose.connect("mongodb+srv://avsingh02as02:1032220874@cluster0.qbpdjik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
  });

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Using imported routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`to do list backend listening on port ${port}`);
});
