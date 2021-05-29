import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function family(state = initialState.family, action) {
    if (action) {
        switch (action.type) {
            case types.GET_FAMILY:
                return action.families;

            case types.CREATE_FAMILY: {
                let tmpState = [...state, Object.assign({}, action.family)];
                return tmpState
            }

            case types.DELETE_FAMILY: {
                const newState = Object.assign([], state);
                const indexOfFamilyToDelete = state.findIndex(family => {
                    return family.id === action.family.id;
                });
                newState.splice(indexOfFamilyToDelete, 1);
                return newState;
            }

            default:
                return state;
        }
    }
}