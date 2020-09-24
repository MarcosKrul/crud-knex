
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'crud_person_projects',
      user: 'postgres',
      password: 'pgadmin'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
