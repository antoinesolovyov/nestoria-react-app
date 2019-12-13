import React from "react";

import "./List.css";

import City from "../CityComponent/City";

const List = props => {
    const cities = () =>
        props.cities.map(city => (
            <li key={city.id}>
                <City city={city} />
            </li>
        ));

    return <ul>{cities()}</ul>;
};

export default List;
