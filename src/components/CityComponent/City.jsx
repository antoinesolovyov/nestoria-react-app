import React from "react";

import "./City.css";

class City extends React.Component {
    render() {
        const { img_url, title, summary, price_formatted } = this.props.city;

        return (
            <div className="city">
                <div className="city__image">
                    <img src={img_url} alt="" />
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
                <button className="city__like">♥</button>
            </div>
        );
    }
}

export default City;
