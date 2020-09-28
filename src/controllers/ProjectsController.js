const knex = require("../database")
const { create, update } = require("./UserController")

module.exports = {
    async index(req, res, next)  {
        try {
            const { user_id, page = 1} = req.query
            const countObject = knex('projects').count()
            
            const query = knex('projects')
                         .limit(2)
                         .offset(2 * (page-1))
            
            if(user_id) {
                query.where({ user_id })
                     .join('users', 'users.id', '=', 'projects.user_id')
                     .select('projects.*', 'users.user_name', 'users.email')
                     .where('users.deleted_at', null)
                countObject.where({ user_id })
            }

            const [ count ] = await countObject
            const results = await query
            res.header('X-Total-Count', count['count'])
            return res.json(results)
        } catch (error) {
            next(error)            
        }
    },
    async create(req, res, next) {
        try {
            const {user_id, title} = req.body
            await knex('projects').insert({
                user_id,
                title
            })
            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const { id } = req.params
            const { title } = req.body
            await knex('projects')
                 .update({ title })
                 .where({ id })
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params
            await knex('projects')
                .where( {id} )
                .del()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }
    }
}

