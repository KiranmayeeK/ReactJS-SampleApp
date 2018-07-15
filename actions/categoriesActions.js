import AppDispatcher from '../dispatchers/AppDispatcher';
import CategoryAPI from '../services/CategoryAPI'

var categoriesActions = {
    getCategories: function () {
        CategoryAPI.getCategories();
    },
    getCategoryItems:function(category){
        CategoryAPI.getCategoryItems(category);
    }
};

module.exports = categoriesActions;