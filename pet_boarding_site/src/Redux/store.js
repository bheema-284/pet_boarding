import { combineReducers ,createStore} from 'redux';
import { listingReducer } from '../Redux/CreateEntity/reducer';
const rootReducer = combineReducers({
  listing: listingReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
