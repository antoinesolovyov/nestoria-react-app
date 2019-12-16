import React from "react";

import "./Like.css";

class Like extends React.Component {
    state = {
        isLiked: false
    };

    likeClickHandler = () => {
        this.props.onLikeClick(!this.state.isLiked);

        this.setState({ isLiked: !this.state.isLiked });
    };

    render() {
        return (
            <button onClick={this.likeClickHandler} className={this.state.isLiked ? "like" : "dislike"}>
                ♥
            </button>
        );
    }
}

export default Like;
