import knex from 'knex'
import path from 'path'

const db = knex({
  client:'sqlite3',
  connection:{
    // Caminho do banco de dados, desta forma nao precisa colocar a /
    filename:path.resolve(__dirname,'database.sqlite')
  },
  useNullAsDefault:true,
})

export default db;