import express from 'express'

// setup dotenv
import { config } from 'dotenv'
import { GetUsersController } from './controller/getUsers/getUsers';
import { MongoGetUserRepository, PostgressGetUserRepository } from './repositories/getUser/mongoGetUser';
import { MongoClient } from './database/mongo';
// imports

const main = async () => {
  // configurando express e porta
  config()
  const app = express()
  await MongoClient.connect()
  
           //  rotas
app.get("/users", async (req,res) => {
  try{
          // instanciamentos de banco noSql
    const mongoGetUsersRepository = new MongoGetUserRepository()
    const getUsersControllerMongo = new GetUsersController(mongoGetUsersRepository)
    const {body,statusCode } = await getUsersControllerMongo.handle()
          // instanciamento do banco noSql 
    const PostgressGetUsersRepository = new PostgressGetUserRepository()
    const getUsersControllerPostgress = new GetUsersController(PostgressGetUsersRepository)
    const respPostgress = await getUsersControllerPostgress.handle()
    //
    res.send(body).status(statusCode)
    res.send(respPostgress.body).status(respPostgress.statusCode)
      }catch(err){
        return console.log(err)
      }
})
 //  executando a porta
 const port = process.env.PORT || 8000; 
  
  app.listen(port,() => {
    console.log('iniciado Backend...')
    console.log(`http://localhost:${port}`)
  })
}
main()