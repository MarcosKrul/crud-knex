const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const EmailController = require('./controllers/EmailController')
const ProjectController = require('./controllers/ProjectsController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/users/send/:name', EmailController.sendEmail)

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.create)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.delete)

module.exports = routes