// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lessons.db3' //this is the name of the db file, use npx knex migrate:make to create the file
    },
    useNullAsDefault: true
  },
};
