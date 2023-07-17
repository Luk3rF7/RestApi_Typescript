import { User } from '../../models/user';
import { HttpResponse } from '../interface_protocol';

export interface IGetUsersController {
     handle() : Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers():Promise<User[]>
}