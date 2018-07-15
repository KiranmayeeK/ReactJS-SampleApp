import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App.js';
import Main from './main.js';
import Home from './Home.js';
import Categories from './Categories.js';
import CategoriesDetail from './CategoriesDetail.js';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route exact path="index" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route path="/item/:id" component={CategoriesDetail} />
      </Route>
    </Router>
), document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('app'));
