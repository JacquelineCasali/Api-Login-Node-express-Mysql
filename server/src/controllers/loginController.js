const db = require("../db/models");
const bcrypt = require("../services/auth");
const jwt= require('jsonwebtoken')
const authConfig=require('../db/config/auth')
//const SECRET='123'
const loginController = {

  
  //cadastrar
  async login(req, res) {
    const { email, password } = req.body;
    const userAuth = await db.Users.findOne({ where: { email } });

    if (!userAuth) {
      return res.status(422).json({ message: `Email ${email} não encontrado` });
    }
    const userSenha = bcrypt.compareHash(password, userAuth.password);

   if (!userSenha) {
      return res.status(401).send({ message: `Email ou senha não confere ` });
    }
    //resgatando o id do usuario
    const{id}=userAuth;
    //expiresIn:300 expira em 5 minutos
  const token= jwt.sign({id},authConfig.secret,{expiresIn:300})
  
 // res.json({auth:true,token})
     return res.json({
      auth:true,
      // message: 'logado com sucesso',
      // userAuth:{
      //   id,email
      // },
      token
     }
      
     );
  
  },

  async logout(req, res) {
    const blacklist=[];
    blacklist.push(req.headers['x-access-token'])
    res.end();
  }

};
module.exports = loginController;
