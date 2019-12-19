import { actionTypes } from "../actions/actionTypes";

export const initialState = {
    modalIsOpened: false,
    modalFlat: {}
};

export default function modal(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_MODAL_IS_OPENED:
            return { ...state, modalIsOpened: action.payload };

        case actionTypes.SET_MODAL_FLAT:
            return { ...state, modalFlat: action.payload };

        default:
            return state;
    }
}
