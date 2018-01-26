import { applyMiddleware, compose, createStore,  } from 'redux';
import thunk from 'redux-thunk';
import { robotReducer } from './reducers/';

const composeEnhancers = (
  window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

function configureStore() {
  // configure middlewares
  const middlewares = [
    thunk,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    robotReducer,
    enhancer
  );
}

const store = configureStore();

// export store singleton instance
export default store;
