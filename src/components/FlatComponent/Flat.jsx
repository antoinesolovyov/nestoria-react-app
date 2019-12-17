import React, { useCallback } from "react";

import "./Flat.css";
import Like from "../LikeComponent/Like";

const Flat = props => {
    const likeClickHandler = useCallback(isLikeClicked => {
        props.onLikeClick(isLikeClicked, props.flat);
    }, [props]);

    const flatClickHandler = useCallback(() => {
        props.onFlatClick(props.flat);
    }, [props]);

    const { img_url, title, summary, price_formatted } = props.flat;

    return (
        <div className="flat">
            <div onClick={flatClickHandler}>
                <div className="flat__image">
                    <img src={img_url} alt={title} />
                </div>
                <div className="flat__description">
                    <p>{title}</p>
                    <p>{summary}</p>
                    <p>{price_formatted}</p>
                </div>
            </div>
            <Like flat={props.flat} onLikeClick={likeClickHandler} />
        </div>
    );
};

export default Flat;
