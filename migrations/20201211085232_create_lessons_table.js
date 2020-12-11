
exports.up = function(knex) {
    return knex.schema.createTable('lessons', tbl => {
        tbl.increments() //primary key, field name = 'id'
        tbl.text('name', 128)
            .notNullable()
        tbl.timestamps(true, true)
    })
    .createTable('messages', tbl => {
        tbl.increments() //primary key for messages table
        tbl.string('sender')
            .notNullable()
            .index()
        tbl.text('text')
            .notNullable()
        tbl.timestamps(true, true)

        tbl.integer('lesson_id') // foreign key info, links to lessons table
            .unsigned()
            .references('id')
            .inTable('lessons')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages').dropTableIfExists('lessons')
};
