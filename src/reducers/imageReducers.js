import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedImages = createReducer({}, {

    [types.SET_SEARCHED_IMAGES](state, action) {
        let newState = {};
        action.images.forEach(image => {
            newState[image.public_id] = image;
        });
        return newState;
    }
});