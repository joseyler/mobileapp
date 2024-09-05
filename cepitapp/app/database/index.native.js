import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import {mySchema} from '../model/schema'
import Usuario from '../model/usuario'



const adapter = new SQLiteAdapter({
 mySchema,

 
 
 
  onSetUpError: error => {
    
  }
})


export const database = new Database({
  adapter,
  modelClasses: [
    Usuario

  ],
})


