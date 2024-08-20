import { connect } from 'mongoose';

const Database = () => {
  // connect('mongodb+srv://shindeabhijeet552:Abhijeet143d!@cluster0.pfzykwx.mongodb.net/joblisting-portal?retryWrites=true&w=majority&appName=Cluster0')
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
