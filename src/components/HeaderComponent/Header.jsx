import React, { useState, useCallback } from "react";

import "./Header.css";
import Favorites from "../FavoritesComponent/Favorites";

const Header = props => {
    const [place, setPlace] = useState("");

    const onSubmitHandler = useCallback(
        event => {
            if (place) {
                props.onSearchCity(place);
            }

            event.preventDefault();
        },
        [props, place]
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
            <Favorites onFavoritesClick={props.onFavoritesClick} />
        </header>
    );
};

export default Header;
