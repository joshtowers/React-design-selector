var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/AppDispatcher.js');

var AppActions = {
  updateDesign:function(design){
    AppDispatcher.dispatch({
      actionType: AppConstants.UPDATE_DESIGN,
      design: design
    })
  },
  updateLayout:function(layout){
  	AppDispatcher.dispatch({
  		actionType: AppConstants.UPDATE_LAYOUT,
  		layout: layout
  	})
  }
}

module.exports = AppActions;
