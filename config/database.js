// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ec2-54-227-248-71.compute-1.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd13lh6aeu96j4m'),
//       user: env('DATABASE_USERNAME', 'blwzgvkgtywpcj'),
//       password: env('DATABASE_PASSWORD', 'e05c745771a9cb32b08bf831e9e47cd789998807b6917453e571b342eb963c81'),
//       ssl: { rejectUnauthorized: false }
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
      client: 'postgres',
      connection: {
          host: env('DATABASE_HOST', 'fanny.db.elephantsql.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'oqykvdmu'),
          user: env('DATABASE_USERNAME', 'oqykvdmu'),
          password: env('DATABASE_PASSWORD', 'lsc0UtJgDWT5mxUr2JIgcXjcPoC7Kq6H'),
          ssl: { rejectUnauthorized: false }
      },
  },
});
