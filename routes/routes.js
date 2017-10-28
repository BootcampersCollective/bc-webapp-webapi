'use strict';
// setting up the routes
// imports controller

var loginController = require ('../controllers/controller');
//app.post ('/api/v1/auth', loginController);


module.exports = routes => {

/*////////////////////////////////////////////////////////////////////
        BACK END routes

  ///////////////////////////////////////////////////////////*/

  routes.get ('api/v1/auth', loginController.get);
  routes.post ('api/v1/auth', loginController.post);
}
