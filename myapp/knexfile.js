// Update with your config settings.

const config = require('config');
mode = process.env.NODE_ENV;

module.exports = {

  dev: {
    client: 'mysql',
    connection: {
      host     : 'localhost',
      database: 'procrew',
      user:    'root',
      password:  '12345'
    }

  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
