//quanto tempo o token é valido 

require('dotenv').config()
//require("dotenv/config.js")
module.exports={
secret:process.env.APP_SECRET,
//expiresIn:"7d"
}
