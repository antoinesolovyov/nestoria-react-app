import { actionTypes } from "../actions/actionTypes";

export const initialState = {
    place: "",
    flats: [],
    page: 1,
    total: 1
};

export default function flats(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PLACE:
            return { ...state, place: action.payload };

        case actionTypes.SET_PAGE:
            return { ...state, page: action.payload };

        case actionTypes.SET_TOTAL:
            return { ...state, total: action.payload };

        case actionTypes.SET_FLATS:
            return { ...state, flats: action.payload };

        case actionTypes.GET_RESULT:
            return {
                ...state,
                flats: [...action.payload.result.response.listings],
                total: action.payload.result.response.total_pages
            };

        case actionTypes.LOAD_MORE:
            return {
                ...state,
                flats: [
                    ...state.flats,
                    ...action.payload.result.response.listings
                ]
            };

        default:
            return state;
    }
}
