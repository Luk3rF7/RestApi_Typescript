import { IGetUsersRepository } from '../../controller/getUsers/getUserProtocol';
import { MongoClient } from '../../database/mongo';
import { User } from '../../models/user';

export class MongoGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
  const user = await MongoClient
  .db.collection<User>('users')  // pega todo usuario
  .find({}) // vai buscar
  .toArray() // converte em array

  }
}

// * caso  eu queira adicionar outro banco de dados só criar seguinte repo:
export class PostgressGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
    return []
  }
}
