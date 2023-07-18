import { ObjectId } from 'mongodb'
import { IUpdateUserRepository, UpdateUserParams } from '../../controller/updateUser/updateUserProtocol';
import { User } from '../../models/user';
import { MongoClient } from '../../database/mongo';
import { MongoUser } from '../mongoProtocol';


export class MongoUpdateUserRepository implements IUpdateUserRepository{
  async updateUser(id: string,params:UpdateUserParams): Promise<User>{
    await MongoClient.db.collection("users").updateOne(
      {_id: new ObjectId(id)},
      {
        $set:{
          ...params,
        },
      }
    );

    const user =await MongoClient.db
    .collection<MongoUser>("users")
    .findOne({ _id: new ObjectId(id)});

    if(!user){
      throw new Error("user not updated");
    }
    const { _id,...rest} = user;
    return { id: _id.toHexString(), ...rest}
  }
}