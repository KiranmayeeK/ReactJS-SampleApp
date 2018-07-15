import React from 'react';
import HeaderComponent from './components/HeaderComponent.js';
import CategoryDetailStore from './stores/CategoryDetailStore';
import categoriesActions from './actions/categoriesActions';
class CategoriesDetail extends React.Component {
    constructor(props) {
        super(props);
        categoriesActions.getCategories();
        categoriesActions.getCategoryItems(this.props.match.params.id);
        this.state = {
            categories: {},
            categoryname:this.props.match.params.id,
            categoryItems:{}
        };
        this._onChange = this._onChange.bind(this);
        // this.getDetail=this.getDetail.bind(this);
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
        let _categoryItems = CategoryDetailStore.getCategoryItems();
		this.setState({
            categories: _categories,
            categoryItems: _categoryItems
        });
    }
    getDetail(category){
        categoriesActions.getCategoryItems(category.short_name);
    }
   render() {
        return (
            <div>
                <HeaderComponent/>
                <div>Menu Categories exact</div>
                <ul>
                {
                this.state.categories && this.state.categories.length>0 ?
                this.state.categories.map(function (category, i) {
                    return (
                    <li key={i}><a onClick={this.getDetail.bind(null, category)} href={'#/categories/item/'+category.short_name}>{category.name} - ({category.short_name})</a></li>
                    )
                }.bind(this))
                : null
                }
                </ul>
                Item in category: ({this.state.categoryItems.menu_items && this.state.categoryItems.menu_items.length>0 ? this.state.categoryItems.category.short_name : ""})
                <table border="1">
                    <thead>
                        <tr><td>Name</td><td>Description</td></tr>
                    </thead>
                    <tbody>
                        {
                        this.state.categoryItems.menu_items && this.state.categoryItems.menu_items.length>0 ?
                        this.state.categoryItems.menu_items.map(function (categoryItem, i) {
                            return (
                            <tr key={i}>
                                <td>{categoryItem.name}</td>
                                <td>{categoryItem.description}</td>
                            </tr>
                            )
                        }.bind(this))
                        : null
                        }
                    </tbody>
                </table>
            </div>
        );
   }
}
export default CategoriesDetail;