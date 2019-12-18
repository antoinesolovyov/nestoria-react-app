export const SET_PLACE = "SET_PLACE";

export function setPlace(place) {
    return {
        type: SET_PLACE,
        payload: place
    };
}

export const SET_PAGE = "SET_PAGE";

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    };
}

export const SET_TOTAL = "SET_TOTAL";

export function setTotal(total) {
    return {
        type: SET_TOTAL,
        payload: total
    };
}

export const SET_FLATS = "SET_FLATS";

export function setFlats(flats) {
    return {
        type: SET_FLATS,
        payload: flats
    };
}

export const SET_FAVORITES = "SET_FAVORITES";

export function setFavorites(favorites) {
    return {
        type: SET_FAVORITES,
        payload: favorites
    };
}

export const SET_FAVORITES_IS_CLICKED = "SET_FAVORITES_IS_CLICKED";

export function setFavoritesIsClicked(favoritesIsClicked) {
    return {
        type: SET_FAVORITES_IS_CLICKED,
        payload: favoritesIsClicked
    };
}

export const SET_MODAL_IS_OPENED = "SET_MODAL_IS_OPENED";

export function setModalIsOpened(modalIsOpened) {
    return {
        type: SET_MODAL_IS_OPENED,
        payload: modalIsOpened
    };
}

export const SET_MODAL_FLAT = "SET_MODAL_FLAT";

export function setModalFlat(modalFlat) {
    return {
        type: SET_MODAL_FLAT,
        payload: modalFlat
    };
}
