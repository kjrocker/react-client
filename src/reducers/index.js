import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';

const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    auth: authReducer
});

export default reducers;
