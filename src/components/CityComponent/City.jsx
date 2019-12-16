import React from "react";

import "./City.css";
import Like from "../LikeComponent/Like";

class City extends React.Component {
    likeClickHandler = isLikeClicked => {
        this.props.onLikeClick(isLikeClicked, this.props.city);
    };

    render() {
        const { img_url, title, summary, price_formatted } = this.props.city;

        return (
            <div className="city">
                <div className="city__image">
                    <img src={img_url} alt={title} />
                </div>
                <div className="city__description">
                    <p>
                        <b>{title}</b>
                    </p>
                    <p>{summary}</p>
                    <p>
                        <b>{price_formatted}</b>
                    </p>
                </div>
                <Like
                    city={this.props.city}
                    onLikeClick={this.likeClickHandler}
                />
            </div>
        );
    }
}

export default City;
