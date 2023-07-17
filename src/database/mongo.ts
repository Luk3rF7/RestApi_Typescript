 import {MongoClient as Mongo, Db} from 'mongodb'
// metodo singleton:
export const MongoClient = { 
  //proriedades:
  client: undefined as unknown as Mongo,
  db: undefined  as unknown as Db,


  async connect(): Promise<void> {

    // instancia do mongodb pelo .env
    const url =process.env.MONGODB_URL || "?retryWrites=true&w=majority";
    const username = process.env.MONGODB_USERNAME 
    const password = process.env.MONGODB_PASSWORD  
    const client = new Mongo(url, {
      // * só vai se cadstra com essas credenciais:
      auth: {
        username,password
      }
    })
    const db = client.db("user-db")

    //
    this.client = client;
    this.db = db;
    console.log('Conectado com Db!!!!')
  },
}