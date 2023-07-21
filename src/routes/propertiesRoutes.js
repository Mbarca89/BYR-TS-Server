const { Router } = require('express');
const {publishProperty} = require('../controllers/publishProperty')
const {getProperties} = require('../controllers/getProperties')
const {getFeatured} = require('../controllers/getFeatured')
const {getProperty} = require('../controllers/getProperty')
const {editProperty} = require('../controllers/editProperty')
const {deleteProperty} = require('../controllers/deleteProperty')
const {deleteImage} = require('../controllers/deleteImage')
const {getPropertyList} = require('../controllers/getPropertyList')

const propertiesRoutes = Router();

propertiesRoutes.post('/upload', publishProperty)
propertiesRoutes.post('/edit/:id',editProperty)
propertiesRoutes.delete('/delete/image',deleteImage)
propertiesRoutes.delete('/delete/:id',deleteProperty)
propertiesRoutes.get('/',getProperties)
propertiesRoutes.get('/featured',getFeatured)
propertiesRoutes.get('/list',getPropertyList)
propertiesRoutes.get('/detail/:id',getProperty)

module.exports = propertiesRoutes;