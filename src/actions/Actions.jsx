import uuid from "uuid";

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
} from "./actionTypes";

export function setPlace(place) {
    return {
        type: SET_PLACE,
        payload: place
    };
}

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    };
}

export function setTotal(total) {
    return {
        type: SET_TOTAL,
        payload: total
    };
}

export function setFlats(prevFlats = [], nextFlats = []) {
    return {
        type: SET_FLATS,
        payload: [...prevFlats, ...nextFlats]
    };
}

export function setFavorites(favorites) {
    return {
        type: SET_FAVORITES,
        payload: favorites
    };
}

export function setFavoritesIsClicked(favoritesIsClicked) {
    return {
        type: SET_FAVORITES_IS_CLICKED,
        payload: favoritesIsClicked
    };
}

export function setModalIsOpened(modalIsOpened) {
    return {
        type: SET_MODAL_IS_OPENED,
        payload: modalIsOpened
    };
}

export function setModalFlat(modalFlat) {
    return {
        type: SET_MODAL_FLAT,
        payload: modalFlat
    };
}

export function getResult(place, page, isLoadMore) {
    return async dispatch => {
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
                type: GET_RESULT,
                payload: {
                    result,
                    place,
                    page
                }
            });
        } else {
            dispatch({
                type: LOAD_MORE,
                payload: {
                    result,
                    place,
                    page
                }
            });
        }
    };
}
