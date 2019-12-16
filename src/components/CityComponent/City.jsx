import React from "react";

import "./City.css";
import Like from "../LikeComponent/Like";

class City extends React.Component {
    likeClickHandler = isLikeClicked => {
        this.props.onLikeClick(isLikeClicked, this.props.city);
    };

    cityClickHandler = () => {
        this.props.onCityClick(this.props.city);
    };

    render() {
        const { img_url, title, summary, price_formatted } = this.props.city;

        return (
            <div className="city">
                <div onClick={this.cityClickHandler}>
                    <div className="city__image">
                        <img src={img_url} alt={title} />
                    </div>
                    <div className="city__description">
                        <p>{title}</p>
                        <p>{summary}</p>
                        <p>{price_formatted}</p>
                    </div>
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
