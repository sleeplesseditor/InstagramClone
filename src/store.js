import { AsyncStorage } from 'react-native';
import { 
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose 
} from 'redux';
import { createLogger } from 'redux-logger';
import { thunkMiddleware } from 'redux-thunk';
import reducer from './reducers';
import * as config from './config';
import * as appActions from './actions';
import { languageKeyName } from './config';

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

AsyncStorage.getItem(languageKeyName).then(languageKey => {
	const _languageKey = languageKey || config.defaultLanguageKey;
	const language = languagesConfig.find(l => l.languageKey === _languageKey);
	store.dispatch(appActions.setLanguage(language));
});

export default store;