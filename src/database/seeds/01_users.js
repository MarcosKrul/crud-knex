
exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          user_name: 'Joao',
          email: 'joao@gmail.com'
        },
        {
          user_name: 'Marcio',
          email: 'marcio@gmail.com'
        },
        {
          user_name: 'Maria',
          email: 'maria@gmail.com'
        },
        {
          user_name: 'Ana',
          email: 'ana@gmail.com'
        },
      ]);
    });
};
