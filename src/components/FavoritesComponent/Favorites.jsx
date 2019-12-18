import React from "react";

import "./Favorites.css";

const Favorites = props => {
    return (
        <button
            onClick={() => props.onFavoritesClick(!props.favoritesIsClicked)}
            className={
                props.favoritesIsClicked
                    ? "favorites favorites__active"
                    : "favorites favorites__disactive"
            }
        >
            ♥
        </button>
    );
};

export default Favorites;
