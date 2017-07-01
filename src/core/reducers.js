import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as authReducer } from '../auth'
import { reducer as chapterReducer } from '../chapters'

const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    auth: authReducer,
    api: chapterReducer
});

export default reducers;
