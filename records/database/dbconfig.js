import mongoose from "mongoose";

const connect = async() =>{
    try {
        await mongoose.connect("your mongo database address",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("successfully conneted to database.");
    } catch (error) {
        console.log(error);
        console.log("Error while connecting to database.");
    }
}

export default connect;