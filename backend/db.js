const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB successfully");
    }
    catch (err) {
        console.log("Encounter an error at connecting mongo :" + err);
    }
}

module.exports = connectToMongo;