import {  ObjectId } from 'mongodb';
import { 
  IDeleteUserRepository 
} from '../../controller/deleteUser/deleteUserProtocol';
import { MongoUser } from '../mongoProtocol';
import { User } from '../../models/user';
import { MongoClient } from '../../database/mongo';

export class MongoDeleteUserRepository implements IDeleteUserRepository{
  async deleteUser(id:string):Promise<User>{
    const user = await MongoClient.db.collection<MongoUser>("users").findOne({
      _id: new ObjectId(id)
    });


    if(!user){
      throw new Error("user not found");
    }

    const {deletedCount} = await MongoClient.db
    .collection("users").deleteOne({
      _id: new Object(id)
    });

    if(!deletedCount){
      throw new Error("user not deleted!")
    }

    const { _id,...rest } = user;
    return { id: _id.toHexString(),...rest};
  }
}