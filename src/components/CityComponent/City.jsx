import React from "react";

import "./City.css";
import Like from "../LikeComponent/Like";

const City = props => {
    const likeClickHandler = isLikeClicked => {
        props.onLikeClick(isLikeClicked, props.city);
    };

    const cityClickHandler = () => {
        props.onCityClick(props.city);
    };

    const { img_url, title, summary, price_formatted } = props.city;

    return (
        <div className="city">
            <div onClick={cityClickHandler}>
                <div className="city__image">
                    <img src={img_url} alt={title} />
                </div>
                <div className="city__description">
                    <p>{title}</p>
                    <p>{summary}</p>
                    <p>{price_formatted}</p>
                </div>
            </div>
            <Like city={props.city} onLikeClick={likeClickHandler} />
        </div>
    );
};

export default City;
