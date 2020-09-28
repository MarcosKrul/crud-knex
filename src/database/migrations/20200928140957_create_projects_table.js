
exports.up = function(knex) {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id')
        table.text('title').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.integer('user_id')
             .references('users.id')
             .notNullable()
             .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects')
};

