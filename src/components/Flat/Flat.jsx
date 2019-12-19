import React, { useCallback } from "react";

import "./Flat.css";
import Like from "../Like/Like";

const Flat = ({ flat, onLikeClick, onFlatClick }) => {
    const { img_url, title, summary, price_formatted } = flat;

    const likeClickHandler = useCallback(
        isLikeClicked => {
            onLikeClick(isLikeClicked, flat);
        },
        [flat, onLikeClick]
    );

    return (
        <div className="flat">
            <div onClick={() => onFlatClick(flat)}>
                <div className="flat__image">
                    <img src={img_url} alt={title} />
                </div>
                <div className="flat__description">
                    <p>{title}</p>
                    <p>{summary}</p>
                    <p>{price_formatted}</p>
                </div>
            </div>
            <Like flat={flat} onLikeClick={likeClickHandler} />
        </div>
    );
};

export default Flat;
