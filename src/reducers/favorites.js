import { actionTypes } from "../actions/actionTypes";

export const initialState = {
    favorites: [],
    favoritesIsClicked: false
};

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_FAVORITES:
            return { ...state, favorites: action.payload };

        case actionTypes.SET_FAVORITES_IS_CLICKED:
            return { ...state, favoritesIsClicked: action.payload };

        case actionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

        case actionTypes.DELETE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(
                    favoriteFlat => favoriteFlat.id !== action.payload.id
                )
            };

        default:
            return state;
    }
}
