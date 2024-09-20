const express = require("express");
const router = express.Router();
const Emp = require("../models/table");

//POSTAPI

router.post("/table",async (req,res)=>{
    try{
        const data = new Emp(req.body);
        const saved = await data.save();
        if(saved){
            res.status(201).json({message:"data submited successfully"});
        }else{
            res.status(400).json({error:"data not submit"});
        }
    }catch(error){
        res.status(500).json({error:"server error"})
    }
})

// GET API

router.get("/table", async (req, res) => {
    try {
        const data = await Emp.find();
        res.status(201).send(data);
    }
    catch (error) {
        res.status(500).json({ error: "server error occurrs" });

    }
})
router.get("/table/:id", async(req,res) =>{
    try{
        const id =req.params.id;
        const data = await Emp.findById(id);
        res.status(201).send(data);
       
    }catch(error){
        res.status(500).json({error:"server error occurs"})
    }
    
    })

    router.delete("/table/:id",async(req,res) =>{
        try{
    const id = req.params.id;
    const data = await Emp.findByIdAndDelete(id);
    if(data){
        res.status(200).json({message:"data deleted scussefully"})
    } else{
        res.status(400).json({error:"error occur"})
    }
        }catch(error){
    res.status(500).json({error:"server error"});
        }
    })
    router.patch("/table/:id", async(req,res) =>{
        try{
            const id = req.params.id;
            const data = await Emp.findByIdAndUpdate(id,req.body);
            if(data){
                res.status(200).json({message:"data update sucessfully"})
            }
            else{
                res.status(400).json({error:"error occur"})
            }
        }
        catch(error){
            res.status(500).json({error:"server error"})
        }
    })

module.exports= router;