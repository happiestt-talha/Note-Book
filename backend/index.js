const connectToMongo=require('./db');
const express = require('express');
var cors=require('cors')

connectToMongo();
const app = express();
const port = 5000;

// app.use(cors())

//*Be more CORS friendly
app.use(cors({
  origin: '*', // Allow requests from all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.use(express.json());
//  default main route 
app.get('/', (req, res) => res.send('Hello from main route'));
//? routes to baki programs
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`Notebook is listening on port >> http://localhost:${port} << sir!...`)
})