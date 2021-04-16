import { applyMiddleware, createStore, compose } from 'redux';
// import clothReducer from './cloth/clothReducer';
import userReducer from './user/userReducer';
import thunk from 'redux-thunk';

// const store = createStore(userReducer, applyMiddleware(thunk))
const devTool = window._REDUX_DEVTOOLS_EXTENSION_
    ? window._REDUX_DEVTOOLS_EXTENSION_()
    : compose;

const store = createStore(
    userReducer,
    compose(applyMiddleware(thunk), devTool)
);

export default store;
