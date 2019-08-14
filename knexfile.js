const user = "root";
const password = "";

module.exports = {
  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: user,
      password: password,
      database: 'invitae_test'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: user,
      password: password,
      database: 'invitae'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      user: user,
      password: password,
      database: 'invitae'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },
}