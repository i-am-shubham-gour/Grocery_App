const express = require('express');
const path = require('path')
const connectDB = require('./config/DBconfig');
const groceryRoute = require('./routes/grocery.routes');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config.env'})
const port = process.env.PORT;
connectDB();

app.use(express.json())
app.use(cors());

app.use("/Grocery", groceryRoute);


app.get('/', (req, res) => {
    res.send({msg: "API Working"})
})

app.listen(port, (error) => {
    if(error){
        console.log(error.message);
    }
    console.log(`Server running `);
})
