const express = require('express');
const router = express.Router();
const Cont = require('../models/contact');
const User = require('../models/user');






router.post("/contact", async (req, res) => {
    try {
        const data = new Cont(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({ message: "data submited successfully" });
        } else {
            res.status(400).json({ error: "data not submit" });
        }

    } catch (error) {
        res.status(500).json({ error: "server error occurs" })
    }

})
router.post("/user", async (req, res) => {
    try {
        const data = new User(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({ message: "data submited successfully" });
        } else {
            res.status(400).json({ error: "data not submit" });
        }

    } catch (error) {
        res.status(500).json({ error: "server error occurs" })
    }

})
// get all the data in contact
router.get("/contact", async (req, res) => {
    try {
        const data = await Cont.find();
        res.status(201).send(data);
    }
    catch (error) {
        res.status(500).json({ error: "server error occurrs" });

    }
})
//get data by id in contact
router.get("/contact/:id", async(req,res) =>{
    try{
        const id =req.params.id;
        const data = await Cont.findById(id);
        res.status(201).send(data);
    
    
    }catch(error){
        res.status(500).json({error:"server error occurs"})
    }
    
    })
//get data by id in user
router.get("/user/:id", async(req,res) =>{
try{
    const id =req.params.id;
    const data = await User.findById(id);
    res.status(201).send(data);


}catch(error){
    res.status(500).json({error:"server error occurs"})
}

})
// get all the data in user
router.get("/user", async (req, res) => {
    try {
        const data = await User.find();
        res.status(201).send(data);
    }
    catch (error) {
        res.status(500).json({ error: "server error occurrs" });

    }
})
// delete for user data by id
router.delete("/user/:id",async(req,res) =>{
    try{
const id = req.params.id;
const data = await User.findOneAndDelete(id);
if(data){
    res.status(200).json({message:"data delteds scussefully"})
} else{
    res.status(400).json({error:"error occur"})
}
    }catch(error){
res.status(500).json({error:"server error"});
    }
})
//delete data by id  in contact
router.delete("/contact/:id",async(req,res) =>{
    try{
const id = req.params.id;
const data = await Cont.findByIdAndDelete(id);
if(data){
    res.status(200).json({message:"data deleted scussefully"})
} else{
    res.status(400).json({error:"error occur"})
}
    }catch(error){
res.status(500).json({error:"server error"});
    }
})
// updata by id in user data
router.patch("/user/:id",async(req,res) =>{
    try{
        const id  = req.params.id;
        const data = await User.findByIdAndUpdate(id,req.body);
if(data){
    res.status(201).json({message:"data updated"});
}else{
    res.status(400).json({eror:"error occur"});
}
    }catch(error){
        res.status(500).json({error: "server error occur"});
    }
})
// update data by id in contact
router.patch("/contact/:id",async(req,res) =>{
    try{
        const id  = req.params.id;
        const data = await Cont.findByIdAndUpdate(id,req.body);

        if(data){
            res.status(201).json({message:"data updated"});
        } else{
            res.status(400).json({error:"error occur"});
        }

    } catch(error){
        res.status(500).json({error:"server error occur"});

    }
})



module.exports = router;