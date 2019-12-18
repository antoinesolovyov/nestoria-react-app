import React from "react";

import "./Like.css";

const Like = props => (
    <button
        onClick={() => props.onLikeClick(!props.flat.isLiked)}
        className={props.flat.isLiked ? "like" : "dislike"}
    >
        ♥
    </button>
);

export default Like;
