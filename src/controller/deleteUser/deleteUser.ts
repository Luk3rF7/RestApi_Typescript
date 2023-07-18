import { User } from '../../models/user';
import { badRequest, ok, serverError } from '../helpers';
import { HttpRequest, HttpResponse, IController } from '../interface_protocol';
import { IDeleteUserRepository } from './deleteUserProtocol';



export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepositoy:IDeleteUserRepository){}

async handle(
  httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
  try{
      //instancio
    const id = httpRequest?.params?.id;

    if(!id){
      return badRequest("missing user id")
    }

    const user = await this.deleteUserRepositoy.deleteUser(id);
    return ok<User>(user)
  }catch(err){
    return serverError()
  }
}
}