import reduxThunk from 'redux-thunk'
import mainPage_reducer from './mainPage_reducer';

const {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} = require('redux');

const reducers = combineReducers({
  mainPageData: mainPage_reducer,
})

const composeEnhancers =
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
