import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'usuarios',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'username', type: 'string' },
       
      ]
    })
   
  ]
})