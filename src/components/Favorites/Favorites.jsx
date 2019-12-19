import React, { useCallback } from "react";

import "./Favorites.css";

const Favorites = ({ favoritesIsClicked, onFavoritesClick }) => {
    const favoritesClickHandler = useCallback(
        () => onFavoritesClick(!favoritesIsClicked),
        [favoritesIsClicked, onFavoritesClick]
    );

    return (
        <button
            onClick={favoritesClickHandler}
            className={
                favoritesIsClicked
                    ? "favorites favorites__active"
                    : "favorites favorites__disactive"
            }
        >
            ♥
        </button>
    );
};

export default Favorites;
