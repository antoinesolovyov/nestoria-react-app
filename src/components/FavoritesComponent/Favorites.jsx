import React, { useState, useCallback } from "react";

import "./Favorites.css";

const Favorites = props => {
    const [favoritesIsClicked, setFavoritesIsClicked] = useState(false);

    const favoritesClickHandler = useCallback(() => {
        props.onFavoritesClick(!favoritesIsClicked);

        setFavoritesIsClicked(!favoritesIsClicked);
    }, [props, favoritesIsClicked, setFavoritesIsClicked]);

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
