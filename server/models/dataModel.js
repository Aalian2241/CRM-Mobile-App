const Sequelize = require('sequelize')
const db = require('../config/config')

const Lead = db.define('lead', {
  leadName: {
      type: Sequelize.STRING
  },
  email: {
      type: Sequelize.STRING
  },
  password: {
      type: Sequelize.STRING
  },
  CustomerName:{
    type:Sequelize.STRING
  },
  Status:
  {
    type: Sequelize.STRING
  },
  Activity
})

module.exports = Lead
