import express from 'express';
import UserSchma from '../model/user';
import { request } from 'http';

const rout :express.Router = express.Router();


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
            UserSchma.findByIdAndUpdate({_id:req.body.id} , {email: req.body.email,name:req.body.name})
            .then(()=>{
                res.send({message:"post update"})
            })
            .catch((eror)=>{
                    console.log(eror);
                    
            })
        })


        rout.delete("/delete",async(req:express.Request,res:express.Response)=>{
            UserSchma.findByIdAndDelete({_id: req.body.id})
            .then(()=>{
                res.send({message:"delete"})
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
        
        rout.get("/todo/:id",async(req:express.Request,res:express.Response)=>{
            let todoOne = await UserSchma.findOne()
            res.send({
                message: todoOne
            })
 
    
         })




module.exports = rout