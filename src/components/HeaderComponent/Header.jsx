import React, { useState } from "react";

import "./Header.css";
import Favorites from "../FavoritesComponent/Favorites";

const Header = props => {
    const [place, setPlace] = useState("");

    const onSubmitHandler = event => {
        if (place) props.onSearchCity(place);

        event.preventDefault();
    };

    const onChangeHandler = event => {
        setPlace(event.target.value);
    };

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
