const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const EmailController = require('./controllers/EmailController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
routes.get('/users/send/:name', EmailController.sendEmail)

module.exports = routes