import { IGetUsersController, IGetUsersRepository } from './getUserProtocol';

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository:IGetUsersRepository){}


  async handle(): Promise<any> {
     try{
         // validar  Requisição
        // vai direcionar  para 
        const users = await this.getUsersRepository.getUsers()

        // retorna para o usuario:
        return {
          statusCode:200,
          body: users,
        }
  } catch(error){
        return{
          statusCode:500,
          body:"Somenthing went wrong."
        }
     }
  }
}