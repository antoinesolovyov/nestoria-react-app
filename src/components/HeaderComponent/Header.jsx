import React, { useState } from "react";

import "./Header.css";

const Header = props => {
    const [place, setPlace] = useState("");

    const onSubmitHandler = event => {
        props.onSearchCity(place);

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
                <button className="button__like">♥</button>
            </form>
        </header>
    );
};

export default Header;
