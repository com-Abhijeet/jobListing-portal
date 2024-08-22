import { connect } from 'mongoose';

const Database=()=>{
connect('mongodb+srv://komalkhatik77:komal1998@cluster0.o0du7.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}
export default Database;