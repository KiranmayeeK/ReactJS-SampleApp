import AppDispatcher from '../dispatchers/AppDispatcher';

var CategoryServerDetailActions = {
    returnCategories: function (response) {
        AppDispatcher.handleServerAction({
            actionType: 'GET_CATEGORIES',
            response: response
        });
    },
    returnCategoryItems:function(response){
        AppDispatcher.handleServerAction({
            actionType: 'GET_CATEGORY_ITEMS',
            response: response
        });
    }
};

module.exports = CategoryServerDetailActions;