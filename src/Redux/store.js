import mainPage_reducer from './mainPage_reducer';

const {
  createStore,
  combineReducers,
} = require('redux');

const reducers = combineReducers({
  mainPageData: mainPage_reducer,
})

const store = createStore(reducers)

export default store
