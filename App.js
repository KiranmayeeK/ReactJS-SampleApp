import React from 'react';
class App extends React.Component {
    render() {
      return (
        <div id='mainBody'>
            <h1>Welcome to Chef Chu's Restaurant By</h1>
            <button className="btnStyle" value="HOME">HOME</button>
            <button className="btnStyle" value="Categories">Categories</button>
            {this.props.children}
        </div>
      );
    }
  }
  
  
  export default App;