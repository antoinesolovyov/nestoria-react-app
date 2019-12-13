import React from "react";
import "./List.css";

import City from "../CityComponent/City";

class List extends React.Component {
    render() {
        const cities = () =>
            this.props.cities.map(city => {
                return (
                    <li key={city.id}>
                        <City city={city} />
                    </li>
                );
            });

        return <ul>{cities()}</ul>;
    }
}

export default List;
