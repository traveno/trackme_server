module.exports = app => {
    const stats = require('../controllers/stat.controller.js');
  
    var router = require('express').Router();
  
    // Create a new user stat
    router.post('/', stats.create);
  
    // Retrieve all user stats by user GUID
    router.get('/', stats.findAll);

    // Delete all stats by userGUID
    router.delete('/', stats.deleteAll);
  
    app.use('/api/stats', router);
  };