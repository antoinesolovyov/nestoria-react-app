import React, { useCallback } from "react";

import "./Header.css";
import Favorites from "../Favorites/Favorites";

const Header = ({
    place,
    onSearchCity,
    setPlace,
    favoritesIsClicked,
    onFavoritesClick
}) => {
    const onSubmitHandler = useCallback(
        event => {
            if (place) {
                onSearchCity(place);
            }

            event.preventDefault();
        },
        [place, onSearchCity]
    );

    const onChangeHandler = useCallback(
        event => {
            setPlace(event.target.value);
        },
        [setPlace]
    );

    return (
        <header>
            <form onSubmit={onSubmitHandler}>
                <button className="button__search">Search</button>
                <input
                    className="input__search"
                    type="text"
                    value={place}
                    onChange={onChangeHandler}
                    placeholder="London"
                />
            </form>
            <Favorites
                favoritesIsClicked={favoritesIsClicked}
                onFavoritesClick={onFavoritesClick}
            />
        </header>
    );
};

export default Header;
