import { User } from '../../models/user';
import { ok, serverError } from '../helpers';
import { HttpResponse, IController } from '../interface_protocol';
import {  IGetUsersRepository } from './getUserProtocol';

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository:IGetUsersRepository){}


  async handle(): Promise<HttpResponse<User[] | string>> {
     try{
         // validar  Requisição
        // vai direcionar  para 
        const users = await this.getUsersRepository.getUsers()

        // retorna para o usuario:
        return ok<User[]>(users)
  } catch(error){
        return serverError()
  }
}
}