import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
