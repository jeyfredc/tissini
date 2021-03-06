import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../components/reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    authReducer: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);