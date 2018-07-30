import { AsyncStorage } from 'react-native';
import { 
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose 
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    );
    return createStore(reducer, initialState, enhancer);
}

//Create store
const store = configureStore({});

export default store;