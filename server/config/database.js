module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cjooqbe1208c73ek6bl0-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'store_38ma'),
      user: env('DATABASE_USERNAME', 'store_38ma_user'),
      password: env('DATABASE_PASSWORD', 'XgHCrmgCZlyFJ0pGunrbrgC9Rqy66Zsf'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
