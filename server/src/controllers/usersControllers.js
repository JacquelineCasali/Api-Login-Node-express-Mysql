
const db = require("../db/models");
const bcrypt=require('../services/auth')

const usersControllers = {
  
  //criar listar imagem
  async listar(req, res)  {
    //try if do erro 
    try{
const users=await db.Users.findAll({
  order: [["email", "ASC"]],
})
return res.json(users)
    }catch(err){
      console.error(err);
return res.status(500).json({error:"Erro do Servidor Interno"})
      
    }
  },
//cadastrar
async criar (req, res) {
  //verificando se o email já esta cadastrado
try{
    const { email,password} = req.body;
    const user = await db.Users.findOne({ where: { email } });
if(user){
  return res.status(422).json({message:`Email ${email} já cadastrado`});
}

//criptografar a senha bcrypt

  // cadastrar no banco de dados
 const newUser= await db.Users.create({ email,
 password:bcrypt.generateHash(password)});
  
  
  // cadastrado com sucesso
      return res.status(200).json(newUser);
      
      }catch(err) {
      return res.status(400).json({message:`Verifique os campos `});
    }
},


async ler (req, res)  {
      
      try {
        const { id } = req.params;
        const users = await db.Users.findOne({ where: { id } });
// caso nao encotre o usuario 
if(!users){
  return res.status(404).json({message: "Usuario não encontrado",});
}
        return res.status(200).json(users);
      } catch (err) {
        return res.status(400).send({err:err});
      }
    },

    async update (req, res) {
      try {
              const { id } = req.params;
           const { email,password} = req.body;
           const users = await db.Users.findOne({ where: { id } });
        if (!users) {
          return res.status(404).json({
            message: "Usuario não encontrado",
          });
        } else {
            await db.Users.update(
            { email,password:bcrypt.generateHash(password)
              
              },
            { where: { id } }
          );
          return res.status(200).json({
            message: "Usuario atualizado com suceso!",
              });

        }
      } catch (err) {
       // return res.status(400).send(err);
       return res.status(500).send({err:err});
      }
    },
  
    async delete (req, res) {
      try {
        const { id } = req.params;

        const rows = await db.Users.findOne({ where: { id } });
        if (!rows) {
          return res.status(400).json({
            message: "Usuário não encontrado",
          });
        } else {
          await db.Users.destroy({ where: { id } });

          return res.status(200).json({
            message: "Deletado com suceso!",
          });
        }
      } catch (err) {
        return res.status(500).send(err);
      }
    },


  };
module.exports = usersControllers;
