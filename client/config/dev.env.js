'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // APP_URL: '"http://192.168.2.114:8080"',
  // API_URL: '"http://192.168.2.114:5000"',
  // APP_URL: '"http://192.168.11.102:8080"',
  // API_URL: '"http://192.168.11.102:5000"',
  APP_URL: '"http://localhost:8080"',
  API_URL: '"http://localhost:5000"',
})
