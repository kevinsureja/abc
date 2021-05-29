import * as types from '../actions/actionTypes';
import { createStore } from 'redux';
import family from '../reducers/familyReducer';
import HttpRequestService from '../service/HttpRequestService';

const store = createStore(family);

export function loadFamily(families) {
    return { type: types.GET_FAMILY, families };
}

export function createFamilyDispatch(family) {
    return { type: types.CREATE_FAMILY, family };
}

export function deleteFamilyDispatch(family) {
    return store.dispatch({ type: types.DELETE_FAMILY, family });
}

export function getFamilies() {
    return function (dispatch) {
        return HttpRequestService.GET('/api/family').then(response => {
            dispatch(loadFamily(response.data));
            return response;
        })
    };
}

export function saveFamily(data) {
    return function (dispatch, getState) {
        return HttpRequestService.POST('/api/family', data).then(response => {
            return response;
        })
    };
}
export function deleteFamily(family) {
    return function (dispatch) {
        return HttpRequestService.DELETE('/api/family/' + family.id).then(response => {
            dispatch(deleteFamilyDispatch(family));
            return response;
        })
    };
}

