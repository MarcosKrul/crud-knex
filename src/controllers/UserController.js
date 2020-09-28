const knex = require("../database")

module.exports = {
    async index(req, res)  {
        const results = await knex('users').where('deleted_at', null)
        return res.json(results)
    },
    async create(req, res, next) {
        try {
            const { user_name } = req.body
            await knex('users').insert({
                user_name
            })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { user_name } = req.body
            await knex('users')
                .update( {user_name} )
                .where( {id} )
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('users')
                .where( {id} )
                .update('deleted_at', new Date())
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    }
}