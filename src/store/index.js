import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './authReducer';

// B1: tạo store
// B2: gắn store vào reactJs => react-redux
// B3: bao thằng App bằng Provider của react-redux và truyền store vào
// B4: sử dụng useSelector để lấy dữ liệu từ store
// B5: sử dụng useDispath để dispatch 1 action vào store

// middleware là gì
// thunk la gi

// middleware redux

const logger = (store) => (next) => (action) => {
    console.log('action', action);
    next(action);
};

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch);
    }

    next(action);
};

// combineReducers dùng để gom nhiều reducer vô làm 1
const reducers = combineReducers({
    auth: authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, logger)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
