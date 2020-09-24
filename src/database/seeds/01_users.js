
exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {user_name: 'Joao'},
        {user_name: 'Marcio'},
        {user_name: 'Maria'},
        {user_name: 'Ana'},
      ]);
    });
};
