import express from 'express'
import mongoose from './config/database'

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("succcesdful")
});
const app = express()
const PORT:any = process.env.PORT || 3003



app.listen(PORT, ()=>{
    console.log("Chal ra ha")
})
app.get("/", (req: express.Request,res:express.Response)=>{
res.send({
    message: 'code is runing'
})
})

console.log("express")

app.use(express.json());
app.use("/",require("./todo/getPost"))