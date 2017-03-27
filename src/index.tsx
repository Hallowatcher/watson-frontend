import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Iterable } from 'immutable';
import { initialState, rootReducer } from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './containers/App';
import Counter from './containers/Counter';

const stateTransformer = (state: any) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware( thunk, createLogger({ stateTransformer }) )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>

        <Route exact path='/' component={App} />
        <Route path='/counter' component={Counter} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
