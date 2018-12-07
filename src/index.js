import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import SearchBar from './components/search-page';
import reducers from './reducers';
import PriceList from './components/product-pricelist-page';
import OptionsListPage from './components/options-list-page';
import GroceryListPage from './components/grocery-list-page';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path='/pricelist/:upc'  component={PriceList} />
          <Route path='/optionslist' component={OptionsListPage} />
          <Route path='/grocerylist' component={GroceryListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
