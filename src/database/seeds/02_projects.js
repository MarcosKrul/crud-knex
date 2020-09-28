
exports.seed = function(knex) {
  return knex('projects')
    .del()
    .then(function () {
      return knex('projects').insert([
        {
          user_id: 14,
          title: 'Automacao residencial'
        },
        {
          user_id: 14,
          title: 'Robotica para criancas'
        },
        {
          user_id: 14,
          title: 'Automacao industrial'
        },
        {
          user_id: 15,
          title: 'Programacao para criancas'
        }
      ])
    })
}
