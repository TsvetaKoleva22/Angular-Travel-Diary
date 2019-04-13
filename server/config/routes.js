const authRoutes = require('../routes/auth')
const advRoutes = require('../routes/adv')
const categoryRoutes = require('../routes/category')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/adv', advRoutes)
  app.use('/category', categoryRoutes)
}
