import validator from 'validator';

import { CreateUserParams, IcreateUserRepository } from './createUserProtocol';
import { HttpRequest, HttpResponse, Icontroller } from './../interface_protocol';
import { User } from '../../models/user';
import { badRequest, created, serverError } from '../helpers';

export class CreateUserController implements Icontroller {
  constructor(private readonly createUserRepository: IcreateUserRepository){}

  async handle(
    HttpRequest: HttpRequest<CreateUserParams>
  ):Promise<HttpResponse <User | string>>{
    try {
      const requiredFields = ['firstName','lastName','email','password'];

      for(const field of requiredFields){
        if(!HttpRequest?.body?.[field as keyof CreateUserParams]?.length){
          return badRequest(`Field${field} is required`);
        }
      }

      // validação do email:
      const emailIsValid = validator.isEmail(HttpRequest.body!.email);
        if(!emailIsValid){
          return badRequest("E-mail is invalid");
        }

        const user = await this.createUserRepository.createUser(HttpRequest.body!);
        return created<User>(user);
    }catch(err){
      return serverError()
    }
  } 
}