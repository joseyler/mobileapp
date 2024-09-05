import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Usuario extends Model {
  static table = 'usuarios';

  @field('email') email;       // Usamos @field para un campo general (email)
  @field('username') username; // @field también para username
  @field('role') role;       
}