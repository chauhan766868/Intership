const express =require('express');
const router = express.Router();
const rev =  require("../models/Rivision");

//POSTAPI

router.post("/Rivision",async (req,res)=>{
    try{
        const data = new rev(req.body);
        const save = await data.save();
        if(save){
            res.status(200).json({message:"data post succusfully"});
        }
        else{
            res.status(400).json({eror:"error occur"});
        }
    }
    catch(error){
        res.status(500).json({error:"server error"});
    }
})
router.get("/Rivision" , async (req,res) =>{
    try{
    const data = await rev.find();

   res.status(201).send(data);

    }catch(error){
        res.status(500).json({error:"server error"})

    }
})
router.get("/Rivision/:id", async(req,res)=>{
    try{
    const id = req.params.id;
    const data = await rev.findById(id);
    res.status(201).send(data);
    }
    catch(error){
        res.status(500).json({error:"server error"});

    }
})
router.delete("/Rivision/:id", async(req,res)=>{
    try{
        const id  = req.params.id;
        const data = await rev.findByIdAndDelete(id);
        if(data){
            res.status(200).json({message:"data delte succesfully"});
        }
        else{
            res.status(501).json({errror:"error occur"})
        }
    }

    catch(error){
        res.status(501).json({error:"server error"})

    }

})
router.patch("/Rivision/:id", async(req,res)=>{
    try{
    const id  = req.params.id;

    const data = await rev.findByIdAndUpdate(id,req.body,);
    if(data){
        res.status(200).json({message:"data update succsesfully"});
    }
    else{
        res.status(400).json({error:"error occur"});
    }


    }
    catch(error){
        res.status(500).json({error:"server error"});
    }
})






module.exports =router;