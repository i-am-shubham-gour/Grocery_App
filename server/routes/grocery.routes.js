const router = require('express').Router();
const groceryModel = require('../model/grocery')




router.post('/add', async (req, res) => {
    try {
        const {groceryItem, ispurchased} = req.body;
    const newGrocery = new groceryModel({groceryItem, ispurchased});
    await newGrocery.save();
    res.json({msg: "grocery added successfully"});

    } catch (error) {
        console.log(error.message);
    }
})

router.get("/getAll" , async (req, res) => {
    try {
        const grocery = await groceryModel.find();
    res.json(grocery);
    } catch (error) {
        console.log(error.message);
    }
})

router.put("/updateGroceryItem/:id" , async (req, res) => {
 const _id =  req.params.id
    await groceryModel.updateOne({_id}, {ispurchased: true})
    res.json({msg: "Update successfully"})
})

router.delete("/deleteGroceryItem/:id" , async (req, res) => {
    const _myid =  req.params.id
    await groceryModel.deleteOne({_myid})
    res.json({msg: "Delete successfully"})
})

module.exports = router;