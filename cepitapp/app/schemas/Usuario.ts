import Realm, { BSON, ObjectSchema } from "realm";

export class User extends Realm.Object<User> {
    _id!: BSON.ObjectId;
    username!: string;
    password!: string;
    email!:string;
    role!: string;

    static schema: ObjectSchema = {
      name: 'User',
      properties: {
        _id: 'objectId',
        username: {type: 'string', indexed: 'full-text'},
        password: {type: 'string', indexed: 'full-text'},
        email: {type: 'string', indexed: 'full-text'},
        rol: {type: 'string', indexed: 'full-text'},
      },
      primaryKey: '_id',
    };
  }