const app = require('./app');
const logger = require('./utils/logger')
const config = require('./utils/config')

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})