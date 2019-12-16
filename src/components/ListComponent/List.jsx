import React from "react";

import "./List.css";
import City from "../CityComponent/City";

const List = props => {
    const getCities = () =>
        props.cities.map(city => (
            <li key={city.id}>
                <City
                    city={city}
                    onCityClick={props.onCityClick}
                    onLikeClick={props.onLikeClick}
                />
            </li>
        ));

    return <ul>{getCities()}</ul>;
};

export default List;
