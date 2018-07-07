const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

const PORT = (process.env.PORT || 3000)
console.log('port: ' + PORT)

// Import API Routes
app.set('port', PORT);
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
