var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

AppDispatcher.handleServerAction = function (action) {
    this.dispatch({
        source: 'SERVER_ACTION',
        action: action
    });
}

module.exports = AppDispatcher;