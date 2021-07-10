const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: ec2-52-86-2-228.compute-1.amazonaws.com,
        port: 5432,
        database: d8u621pbtssihu,
        username: bragiyogbypcdc,
        password: 1de7212b060fa9ed56a7a7a107c3510e9c01f5078a6cb4fd36123b46a8901b06,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
 
postgres://:@:/d8u621pbtssihu