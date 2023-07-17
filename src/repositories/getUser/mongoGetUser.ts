import { IGetUsersRepository } from '../../controller/getUsers/getUserProtocol';
import { User } from '../../models/user';

export class MongoGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
    return [{
      firstName:'usuario number 1',
      lastName: 'testing',
      email: 'user@example.com',
      password:'123456'
    }]
  }
}

// * caso  eu queira adicionar outro banco de dados só criar seguinte repo:
export class PostgressGetUserRepository implements IGetUsersRepository {
 async  getUsers(): Promise<User[]> {
    return [{
      firstName:'usuario number 1 do postgress',
      lastName: 'testing2',
      email: 'userPostgress@example.com',
      password:'123456'
    }]
  }
}
