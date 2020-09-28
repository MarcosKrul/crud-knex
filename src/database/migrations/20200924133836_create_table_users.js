const { onUpdateTrigger } = require("../../../knexfile")

exports.up = async function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.text('user_name').unique().notNullable()
        table.text('email').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).then(()=> {
        return knex.raw(onUpdateTrigger('users'))
    })
};

exports.down = async function(knex) {
    return knex.schema.dropTable('users')
};
