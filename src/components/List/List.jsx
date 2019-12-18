import React, { useCallback } from "react";

import "./List.css";
import Flat from "../Flat/Flat";

const List = ({ flats, onFlatClick, onLikeClick }) => {
    const getFlats = useCallback(
        () =>
            flats.map(flat => (
                <li key={flat.id}>
                    <Flat
                        flat={flat}
                        onFlatClick={onFlatClick}
                        onLikeClick={onLikeClick}
                    />
                </li>
            )),
        [flats, onFlatClick, onLikeClick]
    );

    return <ul>{getFlats()}</ul>;
};

export default List;
