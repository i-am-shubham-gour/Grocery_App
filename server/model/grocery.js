const mongoose = require('mongoose');


const grocerySchema = new mongoose.Schema({
    groceryItem: {
         type: String,
         required: true     
},
    ispurchased: {
        type: Boolean
    
}
})

module.exports = mongoose.model("User", grocerySchema);