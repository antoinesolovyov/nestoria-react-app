import uuid from "uuid";

import { actionTypes } from "./actionTypes";

export const setPlace = place => ({
    type: actionTypes.SET_PLACE,
    payload: place
});

export const setPage = page => ({
    type: actionTypes.SET_PAGE,
    payload: page
});

export const setTotal = total => ({
    type: actionTypes.SET_TOTAL,
    payload: total
});

export const setFlats = (prevFlats = [], nextFlats = []) => ({
    type: actionTypes.SET_FLATS,
    payload: [...prevFlats, ...nextFlats]
});

export const setFavorites = favorites => ({
    type: actionTypes.SET_FAVORITES,
    payload: favorites
});

export const setFavoritesIsClicked = favoritesIsClicked => ({
    type: actionTypes.SET_FAVORITES_IS_CLICKED,
    payload: favoritesIsClicked
});

export const setModalIsOpened = modalIsOpened => ({
    type: actionTypes.SET_MODAL_IS_OPENED,
    payload: modalIsOpened
});

export const setModalFlat = modalFlat => ({
    type: actionTypes.SET_MODAL_FLAT,
    payload: modalFlat
});

export const getResult = (place, page, isLoadMore) => async dispatch => {
    const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

    const response = await fetch(url);
    const result = await response.json();

    result.response.listings.map(flat => {
        flat.id = uuid.v1();
        flat.isLiked = false;

        return flat;
    });

    if (!isLoadMore) {
        dispatch({
            type: actionTypes.GET_RESULT,
            payload: {
                result,
                place,
                page
            }
        });
    } else {
        dispatch({
            type: actionTypes.LOAD_MORE,
            payload: {
                result,
                place,
                page
            }
        });
    }
};

export const likeClick = (liked, flat) => dispatch => {
    if (liked) {
        dispatch({
            type: actionTypes.ADD_TO_FAVORITES,
            payload: flat
        });
    } else {
        dispatch({
            type: actionTypes.DELETE_FROM_FAVORITES,
            payload: flat
        });
    }

    flat.isLiked = !flat.isLiked;
};
