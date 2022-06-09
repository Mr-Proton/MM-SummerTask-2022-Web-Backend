const express = require("express");
const app = express();

const articleRoutes = require('./api/articlesAPI')
const userRoutes = require('./api/userAPI')

app.use('/api/article', articleRoutes)
app.use('/api/user', userRoutes)

module.exports = app;