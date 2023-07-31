// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
  development: {
    client: 'pg',
    connection: {
      database: 'casino_db',
      host: 'localhost',
      filename: 'postgres://localhost/casino_db',
      user:     'postgres',
      password: ''
    }
  },
};
