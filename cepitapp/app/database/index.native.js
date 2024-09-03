import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'



const adapter = new SQLiteAdapter({
  schema,

 
  jsi: true, 
 
  onSetUpError: error => {
    
  }
})


const database = new Database({
  adapter,
  modelClasses: [

  ],
})


