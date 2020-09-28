const custom_functions = `
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
        NEW.updated_at = now();
        RETURN NEW;
    END;
    $$ language 'plpgsql';
`

const drop_custom_functions = `
    DROP FUNCTION on_update_timestamp()
`

exports.up = async function(knex){
    return knex.raw(custom_functions)
}

exports.down = async function(knex) {
    return knex.raw(drop_custom_functions)
}