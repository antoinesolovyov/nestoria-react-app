import React, { useCallback } from "react";

import "./Header.css";
import Favorites from "../FavoritesComponent/Favorites";

const Header = props => {
    const onSubmitHandler = useCallback(
        event => {
            if (props.place) {
                props.onSearchCity(props.place);
            }

            event.preventDefault();
        },
        [props]
    );

    const onChangeHandler = useCallback(
        event => {
            props.setPlace(event.target.value);
        },
        [props]
    );

    return (
        <header>
            <form onSubmit={onSubmitHandler}>
                <button className="button__search">Search</button>
                <input
                    className="input__search"
                    type="text"
                    value={props.place}
                    onChange={onChangeHandler}
                    placeholder="London"
                />
            </form>
            <Favorites
                favoritesIsClicked={props.favoritesIsClicked}
                onFavoritesClick={props.onFavoritesClick}
            />
        </header>
    );
};

export default Header;
