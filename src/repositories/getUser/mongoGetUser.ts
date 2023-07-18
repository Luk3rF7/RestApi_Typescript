import { IGetUsersRepository } from '../../controller/getUsers/getUserProtocol';
import { MongoClient } from '../../database/mongo';
import { User } from '../../models/user';
import { MongoUser } from '../mongoProtocol';

export class MongoGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
  const users = await MongoClient.db.collection<MongoUser>('users')  // pega todo usuario
  .find({}) // vai buscar
  .toArray() // converte em array

  return users.map(({_id,...rest}) => ({
      ...rest,
      id:_id.toHexString(),
  }))
  }
}

// * caso  eu queira adicionar outro banco de dados só criar seguinte repo:
export class PostgressGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
    return []
  }
}
