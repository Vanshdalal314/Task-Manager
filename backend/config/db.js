import mongoose from 'mongoose';
     const uri = `mongodb+srv://dalalvvvvansh:KcEDkQruTuo8ya7C@cluster012.7pza9ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster012`;
     export const connectDB = async () => {
       try {
         await mongoose.connect(uri);
         console.log('DB CONNECTED');
       } catch (err) {
         console.error('DB CONNECTION ERROR:', err);
       }
     };
