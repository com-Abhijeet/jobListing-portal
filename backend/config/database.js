import { connect } from 'mongoose';

const Database = () => {
  connect(
    'mongodb+srv://sarikalikhar11:Sudhirkonge11@cluster0.v6qvq.mongodb.net/'
  )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};
export default Database;
