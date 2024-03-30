const mongoose = require('mongoose');
//specify a databse named 'inotebook' 
const URI = "mongodb://localhost:27017/inotebook";
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'inotebook' });

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