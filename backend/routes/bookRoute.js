import express from 'express';

const router = express.Router();


router.post('/new',(req,res)=>{
    const {bookName,authorName,} = req.body;
    if(!bookName || !authorName || !price){
        return res.status(400).json({error:'Please fill all the fields'});
    }



})

router.get('/all',(req,res)=>{
    
})

export default router;