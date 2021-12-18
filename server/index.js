const express = require('express');
const connectDB = require('./config/DBconfig');
const groceryRoute = require('./routes/grocery.routes');
const app = express();
const PORT = process.env.PORT || 4321;
const cors = require('cors')

connectDB();

app.use(express.json())
app.use(cors());

app.use("/Grocery", groceryRoute);


app.get('/', (req, res) => {
    res.send({msg: "API Working"})
})

app.listen(PORT, (error) => {
    if(error){
        console.log(error.message);
    }
    console.log("Server running");
})
