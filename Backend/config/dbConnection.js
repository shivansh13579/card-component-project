import mongoose from "mongoose";

const dbConnection = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017`)

        if(connection) {
            console.log(`Connected to MongoDb: ${connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1) 
    }
   
}

export default dbConnection;