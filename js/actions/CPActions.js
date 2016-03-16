var AppDispatcher = require('../dispatcher/AppDispatcher');
var CPConstants = require('../constants/CPConstants');

var CPActions = {
  getEnvList: function() {
    AppDispatcher.dispatch({
      actionType: CPConstants.CP_GET_ENV_LIST
    });
  },

  /**
   * @param  {string} id The ID of the space
   */
  getInstanceList: function(id) {
    AppDispatcher.dispatch({
      actionType: CPConstants.CP_GET_INSTANCE_LIST,
      id: id
    });
  }
};

module.exports = CPActions;
