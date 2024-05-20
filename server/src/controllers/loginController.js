const db = require("../db/models");
const bcrypt = require("../services/auth");
const jwt= require('jsonwebtoken')
const authConfig=require('../db/config/auth')
//const SECRET='123'
const loginController = {

  

  //cadastrar
  async login(req, res) {
    const { email, password } = req.body;
    const users = await db.Users.findOne({ where: { email } });

    if (!users) {
      return res.status(422).json({message: `Email ${email} não encontrado` });
    }
    const userSenha = bcrypt.compareHash(password, users.password);

   if (!userSenha) {
      return res.status(401).json({message: `Email ou senha não confere ` });
    }
    //resgatando o id do usuario
    const{id}=users;
    //expiresIn:300 expira em 5 minutos
  const token= jwt.sign({id},authConfig.secret,{expiresIn:"7d"})

  res.cookie('token',token)

     return res.json({
      auth:true,
      // message: 'logado com sucesso',
      users:{
         id,email
       },
      token,
      message:'Logado com sucesso'
     }
      
     );
  
  },



};
module.exports = loginController;
