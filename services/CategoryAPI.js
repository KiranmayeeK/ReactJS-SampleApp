import CategoryServerDetailActions from '../actions/CategoryServerDetailActions';
import axios from 'axios';

var CategoryAPI = {
    getCategories: function (type) {
        axios.get('https://davids-restaurant.herokuapp.com/categories.json')
        .then(function(response) {
          const data = response.data;
          CategoryServerDetailActions.returnCategories(data);
        });
    },
    getCategoryItems:function(category) {
        axios.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+category)
        .then(function(response) {
          const data = response.data;
          CategoryServerDetailActions.returnCategoryItems(data);
        });
    }
};

module.exports = CategoryAPI;