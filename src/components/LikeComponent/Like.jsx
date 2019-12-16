import React from "react";

import "./Like.css";

class Like extends React.Component {
    likeClickHandler = () => {
        this.props.onLikeClick(!this.props.city.isLiked);
    };

    render() {
        return (
            <button onClick={this.likeClickHandler} className={this.props.city.isLiked ? "like" : "dislike"}>
                ♥
            </button>
        );
    }
}

export default Like;
