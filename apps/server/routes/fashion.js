import express from "express";

const router = express.Router();


router.get("/fashion",async(req,res)=>{
    res.send("fashion")

})

export default router;