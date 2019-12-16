import React from "react";

import "./Modal.css";
import Like from "../LikeComponent/Like";

const Modal = props => {
    const modalClickHandler = () => {
        props.onModalClick();
    };

    const likeClickHandler = isLikeClicked => {
        props.onLikeClick(isLikeClicked, props.city);
    };

    const {
        img_url,
        title,
        summary,
        price_formatted,
        keywords,
        bathroom_number,
        bedroom_number
    } = props.city;

    return (
        <div className="modal">
            <div className="modal__city">
                <div onClick={modalClickHandler}>
                    <div className="modal__description">
                        <p>{title}</p>
                        <p>{summary}</p>
                        <p>{price_formatted}</p>
                        <p>{keywords}</p>
                        <p>Bathroom number: {bathroom_number}</p>
                        <p>Bedroom number: {bedroom_number}</p>
                    </div>
                    <div className="city__image">
                        <img src={img_url} alt={title} />
                    </div>
                </div>
                <Like city={props.city} onLikeClick={likeClickHandler} />
            </div>
        </div>
    );
};

export default Modal;
