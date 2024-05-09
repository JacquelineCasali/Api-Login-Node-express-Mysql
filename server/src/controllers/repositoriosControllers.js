

const db = require("../db/models");

const repositoriosControllers = {

  
  //criar listar imagem
  async index(req, res)  {
      //try if do erro 
      try{
const {userId}=req.params;
  //verificnado se o usuario existe
  const user = await db.Users.findByPk( userId,{
    //incluir associçao 
    include:{association:'repositorio',
    attributes: ["id","name","url"],
    through: {
      attributes: ["userId", "repositorioId"],
    },}
  } );

  if (!user) {
    return res.status(404).json();
  }

  return res.json(user)
      }catch(err){
        console.error(err);
return res.status(500).json({error:"Erro do Servidor Interno"})
        
      }
    },
  
//cadastrar
async criar(req, res) {
  // receber dados enviados no corpo
  try {
    const { userId } = req.params;
    const { name,url } = req.body;
    const user = await db.Users.findByPk(userId);
    if (!user) {
      return res.status(422).json({ message: `Usuario não encontrada` });
    }
    // cadastrar no banco de dados
    // tecnologia criada ou encontrada no metodo findOrCreate
    const [repositorio] = await db.Repositorios.findOrCreate({
      //procura produto onde esta tentando criar
      where: { name, url },
    });
    await user.addRepositorio(repositorio);
    return res.json(repositorio);
  } catch (err) {
    return res.status(400).send({err: err });
  }
},


async ler(req, res){
      const { id } = req.params;
      try {
        const estudante = await db.Repositorios.findOne({ where: { id } });
        if (!estudante) {
          return res.status(400).json({
            message: "Repositorio não encontrado",
          });
        }
      
        const repositorio = await db.Repositorios.findOne({ where: { id } });

        return res.status(200).json(repositorio);
      } catch (err) {
        return res.status(400).send(err);
      }
    },

    async update(req, res){
      try {
              const { id } = req.params;
           const {  name,url,userId} = req.body;
        //imagem atual no banco de dados
           const estudante = await db.Repositorios.findOne({ where: { id } });
        if (!estudante) {
          return res.status(400).json({
            message: "Repositorio não encontrado",
          });
        } else {
        await db.Repositorios.update(
            {  name,url,userId},
            { where: { id } }
          );
// // apaga o arquivo


          return res.status(200).json({
            message: "Repositorio atualizado com suceso!",
            
              });
          //  return res.status(200).json(edite);
        }
      } catch (err) {
       // return res.status(400).send(err);
        return res.status(400).send({err:err, message:"Preencha os dados Corretamente"});
      }
    },
  
    async delete(req, res){
      try {
        const { userId } = req.params;
        const { name } = req.body;
        
        const user = await db.Users.findByPk(userId);
        if (!user) {
          return res.status(422).json({ message: `Loja não encontrada` });
        }
        const repositorio = await db.Repositorios.findOne({
          //procura produto onde esta tentando criar
          where: { name }});
          if (!repositorio) {
            return res.status(400).json({
              message: "Produto não encontrado",
            });
          }else{
            await user.removeRepositorio(repositorio);
            await res.status(200).json({
              message: "Deletado com suceso!",
            });     
          }
        
      
      } catch (err) {
        return res.status(400).send(err);
      }
    },


  };
module.exports = repositoriosControllers;
