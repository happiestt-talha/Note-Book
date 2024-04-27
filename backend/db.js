const mongoose = require('mongoose');
//specify a databse named 'inotebook' 
// const URI = "mongodb://localhost:27017/inotebook";
// const remConString="mongodb+srv://talha:water714@inotebook.cwvqnd5.mongodb.net/"
const remURI="mongodb+srv://talha:water714@inotebook.cwvqnd5.mongodb.net/?retryWrites=true&w=majority&appName=iNoteBook"
const connectToMongo = async () => {
    try {
        await mongoose.connect(remURI);
        console.log("Connected to MongoDB successfully: ");
    }
    catch (err) {
        console.log("Encounter an error at connecting mongo :" + err);
    }
}

module.exports = connectToMongo;


//*ADDING REMOTE MONGODB CLUSTER

// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://talha:water714@inotebook.cwvqnd5.mongodb.net/?retryWrites=true&w=majority&appName=iNoteBook";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function connectWithMongo() {
//     try {
//         // Connect the client to the server (optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Connected to MongoDB successfully!");
//         return client; // Return the connected client
//     } catch (error) {
//         console.log("Error connecting to MongoDB:", error);
//         throw error; // Rethrow the error to handle it where connectWithMongo is called
//     }
// }

// // Export the connectWithMongo function
// module.exports = connectWithMongo;
