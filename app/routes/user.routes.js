module.exports = app => {
    const users = require('../controllers/user.controller.js');
  
    var router = require('express').Router();
  
    // Create a new user
    router.post('/', users.create);
  
    // Retrieve users by credentials
    router.get('/', users.findAll);

    // Delete user by GUID
    router.delete('/', users.deleteByGUID)
  
    app.use('/api/users', router);
  };