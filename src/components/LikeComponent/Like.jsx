import React from "react";

import "./Like.css";

const Like = props => {
    return (
        <button
            onClick={() => props.onLikeClick(!props.city.isLiked)}
            className={props.city.isLiked ? "like" : "dislike"}
        >
            ♥
        </button>
    );
};

export default Like;
