import { useRealm } from "@realm/react";
import { User } from '../app/schemas/Usuario';
import { BSON } from "realm";
const realm = useRealm();

export async function createUser(username: string, email: string, role: string) {
    realm.write(() => {
        realm.create('User', {
          _id: new BSON.ObjectId(),
          username: username, 
          email: email,       
          role: role,         
        });
      });
  }

export async function getUserByUsername(username: string) {
    const user = realm.objects<User>('User').filtered(`username == "${username}"`)[0];
    return user;
}
