import * as types from './types';
import Api from '../lib/api';
import * as config from '../config';
import * as apiUtils from '../utils/api';

export function fetchImages(tag) {
    return (dispatch, getState) => {
        return Api.get(`${config.CDNUriBase}/${config.CDNCloudName}/image/list/${encodeURIComponent(tag)}.json`)
            .then((response) => {
                dispatch(setSearchedImages({ images: response.resources }));
            });
    }
}

export function setSearchedImages({ images }) {
    return {
        type: types.SET_SEARCHED_IMAGES,
        images
    };
}