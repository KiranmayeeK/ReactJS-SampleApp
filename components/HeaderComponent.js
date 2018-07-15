import React from 'react';
class HeaderComponent extends React.Component {
   render() {
      return (
         <div>
            <h1>Welcome to Chef Chu's Restaurant</h1>
            <a href="#/">HOME</a> &nbsp;
            <a href="#/categories">Categories</a>
         </div>
      );
   }
}
export default HeaderComponent;