import { combineReducers } from 'redux';
import * as appReducer from './appReducers';
import * as imagesReducer from './imageReducers';
import * as navReducer from './navReducers';

export default combineReducers(Object.assign({},
    appReducer,
    navReducer,
    imagesReducer
));