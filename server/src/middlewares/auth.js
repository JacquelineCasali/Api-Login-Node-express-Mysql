 const jwt= require('jsonwebtoken')
 const authConfig=require('../db/config/auth')
 const promisify=require('util')
 //const SECRET='123'

 const auth=async(req,res,next)=>{


   // const token=req.headers['x-access-token'];
    const token=req.headers['x-access-token'];
    //authorization
  


    if(!token){
// //se nao existir
     return res.status(401).json({message:'Token não foi fornecido ou está invalido'})
 }

//validar com jwt

jwt.verify(token,authConfig.secret,(err,decoded)=>{
    if(err) return res.status(401).end();
    req.userId=decoded.userId
    next()

})

 }
    

 module.exports=auth;

