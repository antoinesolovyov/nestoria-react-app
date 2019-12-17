import React, { useCallback } from "react";

import "./List.css";
import Flat from "../FlatComponent/Flat";

const List = props => {
    const getFlats = useCallback(() =>
        props.flats.map(flat => (
            <li key={flat.id}>
                <Flat
                    flat={flat}
                    onFlatClick={props.onFlatClick}
                    onLikeClick={props.onLikeClick}
                />
            </li>
        )), [props]);

    return <ul>{getFlats()}</ul>;
};

export default List;
