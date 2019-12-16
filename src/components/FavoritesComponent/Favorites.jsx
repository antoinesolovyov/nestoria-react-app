import React from "react";

import "./Favorites.css";

class Favorites extends React.Component {
    state = {
        favoritesIsClicked: false
    };

    favoritesClickHandler = () => {
        this.props.onFavoritesClick(!this.state.favoritesIsClicked);

        this.setState({ favoritesIsClicked: !this.state.favoritesIsClicked });
    }

    render() {
        return (
            <button onClick={this.favoritesClickHandler} className={this.state.favoritesIsClicked ? "favorites__active" : "favorites__disactive"} >
                ♥
            </button>
        );
    }
}

export default Favorites;
