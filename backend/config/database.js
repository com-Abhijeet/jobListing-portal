import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Database = () => {
  connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

export default Database;