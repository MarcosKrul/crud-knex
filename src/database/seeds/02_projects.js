
exports.seed = function(knex) {
  return knex('projects')
    .del()
    .then(function () {
      return knex('projects').insert([
        {
          user_id: 1,
          title: 'Automacao residencial'
        },
        {
          user_id: 1,
          title: 'Robotica para criancas'
        },
        {
          user_id: 1,
          title: 'Automacao industrial'
        },
        {
          user_id: 2,
          title: 'Programacao para criancas'
        }
      ])
    })
}
