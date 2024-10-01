import mongoose from "mongoose";
const connectDB =() => {
    const mongoUri =
   "mongodb+srv://anarchuluu:z83rM9IOqHvzRPKf@cluster0.ihy8c.mongodb.net/ecommmerce"; 
mongoose.connect(mongoUri).then(() => {
console.log('Connected to MongoDB'); 
})
.catch((error) => {console.error('Connection error', error); });

return
}
export default connectDB