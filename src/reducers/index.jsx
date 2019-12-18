import { actionTypes } from "../actions/actionTypes";

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
        case actionTypes.SET_PLACE:
            return { ...state, place: action.payload };

        case actionTypes.SET_PAGE:
            return { ...state, page: action.payload };

        case actionTypes.SET_TOTAL:
            return { ...state, total: action.payload };

        case actionTypes.SET_FLATS:
            return { ...state, flats: action.payload };

        case actionTypes.SET_FAVORITES:
            return { ...state, favorites: action.payload };

        case actionTypes.SET_FAVORITES_IS_CLICKED:
            return { ...state, favoritesIsClicked: action.payload };

        case actionTypes.SET_MODAL_IS_OPENED:
            return { ...state, modalIsOpened: action.payload };

        case actionTypes.SET_MODAL_FLAT:
            return { ...state, modalFlat: action.payload };

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

        case actionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

        case actionTypes.DELETE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(favoriteFlat => favoriteFlat.id !== action.payload.id)
            };

        default:
            return state;
    }
}
