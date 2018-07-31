import * as types from './types';
import Api from '../lib/api';
import * as config from '../config';
import * as apiUtils from '../utils/api';

export function fetchImages(tag) {
    return (dispatch, getState) => {
        return Api.get(`${config.CDNUriBase}/${config.CDNCloudName}/image/list/${encodeURIComponent(tag)}.json`)
            .then((response) => {
                dispatch(setSearchedImages({ images: response.resources }));
            })
            .catch((ex) => {
                const noItemsHeader = ex.headers.map['x-cld-error'];
                if (noItemsHeader && noItemsHeader.length) {
                    dispatch(setSearchedImages({ images: [] }));
                } else {
                    throw ex;
                }
            });
    }
}

export function setSearchedImages({ images }) {
    return {
        type: types.SET_SEARCHED_IMAGES,
        images
    };
}

export function setCurrentSearchTag(tag) {
    return {
        type: types.SET_CURRENT_SEARCH_TAG,
        tag
    };
}

export function uploadImage(image) {
    return (dispatch, getState) => {
        const url = `${config.CDNUriBase}/${config.CDNCloudName}/image/upload`;
        const params = {
            file: `data.image/${image.imageExtension};base64,${image.data}`,
            tags: image.tags.join(','),
            api_key: config.CDNApiKey,
            timestamp: (+ new Date())
        };
        let contextValues = [];
        if(image.caption) {
            contextValues.push(`caption=${image.caption}`);
        }
        if(image.location && image.location.latitude && image.location.longitude ) {
            contextValues.push(`latitude=${image.location.latitude}|longitude=${image.location.longitude}`);
        }
        if(contextValues.length) {
            params.context = contextValues.join('|');
        }
        params.signature = apiUtils.generateApiSignature(params, config.CDNApiSecret, ['api_key', 'file']);

        return Api.post(url, params)
            .then(image => {
                console.log(image);
                dispatch({
                    type: types.IMAGE_UPLOADED,
                    image
                });
                return image;
            })
            .catch(ex => {
                throw ex;
            });
    }
}