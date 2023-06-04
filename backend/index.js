const express =require('express');
const app =express();
const mysql=require("mysql");
const cors =require("cors");

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Akash@123",
    database:"userdatabase"
});
db.connect(function(error){
    if(error) throw error
    else console.log("connection successfully");
})

app.post("/admin",(req,res)=>{
    const username =req.body.username
    const password =req.body.password
    db.query("SELECT * FROM admin WHERE email =? AND password=?",[username,password],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
        }else{
            if(result.length>0){
                console.log(result);
                res.send(result);
            }else{
                res.send({message:"WRONG USERNAME OR PASSWORD "});
            }   
        }   
    })
})  
app.post("/student",(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    db.query("SELECT * FROM student WHERE email =? AND password=?",[email,password],
    (err,result)=>{
        if(err){
            req.setEncoding({err:err});
        }else{
            if(result.length>0){
                res.send(result);
            }else{
                res.send({message:"WRONG USERNAME OR PASSWORD "});
            }   
        }   
    }
    )}
)
app.post("/studentprofile",(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    console.log(email);
    console.log(password);
    db.query("SELECT * FROM student_profile WHERE email =? AND password=?",[email,password],
    (err,result)=>{
        if(err){
            req.setEncoding({err:err});
            console.log("no result");
        }else{
                res.send(result);
                console.log(result);
            }   
        }   
    )
})
app.post("/query",(req,res)=>{
    const email =req.body.email;
    const query=req.body.query;
    console.log(email);
    console.log(query);
    db.query("INSERT INTO queries(email,query) VALUES (?,?) ",[email,query],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
            console.log(err);
        }else{
            console.log(result);
            res.send(result);
            }     
    })
})
app.get("/getquery",(req,res)=>{
    db.query("SELECT * FROM queries WHERE answer=?",["NOT ANSWERED YET"],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
            // console.log(result);   
        }else{
            if(result.length>0){
                res.send(result);
                console.log(result);   
            // console.log(result); 
            }  
        }   
    }
    )}
)
app.post("/postanswer",(req,res)=>{
    const query=req.body.query;
    const answer=req.body.answer; 
    console.log(query);
    console.log(answer);
    db.query("UPDATE queries SET answer= ? WHERE query=?",[answer,query],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
            console.log(err);
        }
    })
})
app.post("/answeredqueries",(req,res)=>{
    const email =req.body.email;
    console.log(email);
    db.query("SELECT query,answer from queries WHERE email=?",[email],(err,result)=>{
        if(err){
            req.setEncoding({err:err});
            console.log(err);
        }else{
            console.log(result);
            res.send(result);
            }     
    })
})

app.listen(3001,()=>{
    console.log("Running on port 3001");
});