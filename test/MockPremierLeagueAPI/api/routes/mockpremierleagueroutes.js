'use strict';
module.exports = function(app) {
  var mockpremierleagueapi = require('../controllers/mockpremierleagueControllers');

  // Mockpremierleage Routes
  app.route('/tasks')
    .get(mockpremierleagueapi.list_all_tasks)
    .post(mockpremierleagueapi.create_a_task);


  app.route('/tasks/:taskId')
    .get(mockpremierleagueapi.read_a_task)
    .put(mockpremierleagueapi.update_a_task)
    .delete(mockpremierleagueapi.delete_a_task);
};