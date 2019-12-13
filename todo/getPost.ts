import express from 'express';
import UserSchma from '../model/user';

const rout :express.Router = express.Router();

rout.get('/get',(req:express.Request,res:express.Response)=>{
    res.send({
        message: 'chil rah h'
    })
    
} )
        rout.post("/post",async(req:express.Request,res:express.Response)=>{
            const post = await new  UserSchma(req.body)
            post.save()
            .then(()=>{
                res.send({message:"post create"})
            })
            .catch((eror)=>{
                    console.log(eror);
                    
            })
        })


        
        rout.put("/update",async(req:express.Request,res:express.Response)=>{
            UserSchma.findOneAndUpdate(req.body , {email: "sager@gmail.com"})
            .then(()=>{
                res.send({message:"post update"})
            })
            .catch((eror)=>{
                    console.log(eror);
                    
            })
        })


        rout.delete("/delete",async(req:express.Request,res:express.Response)=>{
            UserSchma.findOneAndDelete({email: "mukeshsolanki.com"})
            .then(()=>{
                res.send({message:"post update"})
            })
            .catch((eror)=>{
                    console.log(eror);
                    
            })
        })



         
        rout.get("/todo",async(req:express.Request,res:express.Response)=>{
           let alltodo = await UserSchma.find()
           res.send({
               alltodo: alltodo
           })

   
        })



module.exports = rout