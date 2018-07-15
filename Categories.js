import React from 'react';
import HeaderComponent from './components/HeaderComponent.js';
import CategoryDetailStore from './stores/CategoryDetailStore';
import categoriesActions from './actions/categoriesActions';
class Categories extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            categories: [],
        };
        this._onChange = this._onChange.bind(this);
        this.returnValue = this.returnValue.bind(this);
    }
    componentDidMount() {
		CategoryDetailStore.addChangeListener(this._onChange);
	}
	// Unbind change listener
	componentWillUnmount() {
		CategoryDetailStore.removeChangeListener(this._onChange);
	}
	// Update view state when change event is received
	_onChange() {
		let _categories = CategoryDetailStore.getCategories();
		this.setState({
			categories: _categories
		});
	}
	returnValue(item) {
		let _categories = item.categories ? item.categories : this.state.categories;
		this.setState({
			categories: _categories
        })
        console.log(this.state.categories);
	}
   render() {
      return (
         <div>
            <HeaderComponent/>
            <div>Menu Categories</div>
            <ul>
            {
            this.state.categories ?
              this.state.categories.map(function (category, i) {
                return (
                  <li key={i}><a href={'#/categories/item/'+category.short_name}>{category.name} - ({category.short_name})</a></li>
                )
              }.bind(this))
              : null
            }
            </ul>
         </div>
      );
   }
}
export default Categories;