import AppDispatcher from '../dispatchers/AppDispatcher';
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

// Internal object of Profile
var _categories = {};
var _categoryItems = {};
// Method to load Profile Detail from action data
function loadCategories(data) {
    _categories = data;
}
function loadCategoryItems(data){
    _categoryItems = data;
}
// Merge our store with Node's Event Emitter
var CategoryDetailStore = _.extend({}, EventEmitter.prototype, {

    // Returns all Profile Detail
    getCategories: function () {
        return _categories;
    },
    getCategoryItems: function () {
        return _categoryItems;
    },
    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});

// Register dispatcher callback
AppDispatcher.register(function (payload) {
    var action = payload.action;
    // Define what to do for certain actions
    switch (action.actionType) {
        case 'GET_CATEGORIES':
            // Call internal method based upon dispatched action
            loadCategories(action.response);
            break;
        case 'GET_CATEGORY_ITEMS':
            loadCategoryItems(action.response);
            break;
        default:
            return true;
    }

    // If action was acted upon, emit change event
    CategoryDetailStore.emitChange();

    return true;

});

module.exports = CategoryDetailStore;