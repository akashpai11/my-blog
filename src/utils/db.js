import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

    } catch (err) {
        throw new Error('Connection failed')
    }
}

export default connect