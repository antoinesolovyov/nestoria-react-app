import {
    SET_PLACE,
    SET_PAGE,
    SET_TOTAL,
    SET_FLATS,
    SET_FAVORITES,
    SET_FAVORITES_IS_CLICKED,
    SET_MODAL_IS_OPENED,
    SET_MODAL_FLAT,
    GET_RESULT,
    LOAD_MORE
} from "../actions/actionTypes";

export const initialState = {
    place: "",
    flats: [],
    page: 1,
    total: 1,
    favorites: [],
    favoritesIsClicked: false,
    modalIsOpened: false,
    modalFlat: {}
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLACE:
            return { ...state, place: action.payload };

        case SET_PAGE:
            return { ...state, page: action.payload };

        case SET_TOTAL:
            return { ...state, total: action.payload };

        case SET_FLATS:
            return { ...state, flats: action.payload };

        case SET_FAVORITES:
            return { ...state, favorites: action.payload };

        case SET_FAVORITES_IS_CLICKED:
            return { ...state, favoritesIsClicked: action.payload };

        case SET_MODAL_IS_OPENED:
            return { ...state, modalIsOpened: action.payload };

        case SET_MODAL_FLAT:
            return { ...state, modalFlat: action.payload };

        case GET_RESULT:
            return {
                ...state,
                flats: [...action.payload.result.response.listings],
                total: action.payload.result.response.total_pages
            };

        case LOAD_MORE:
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
