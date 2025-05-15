import mongoose from 'mongoose';
     const uri = ``;
     

     export const connectDB = async () => {
       try {
         await mongoose.connect(uri);
         console.log('DB CONNECTED');
       } catch (err) {
         console.error('DB CONNECTION ERROR:', err);
       }
     };
