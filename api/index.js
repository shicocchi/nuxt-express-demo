const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)
app.set('port', (process.env.PORT || 3000));

console.log('port: ' + (process.env.PORT || 3000))

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
