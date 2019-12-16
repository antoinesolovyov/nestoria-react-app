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
                        <p>
                            <b>{title}</b>
                        </p>
                        <p>{summary}</p>
                        <p>
                            <b>{price_formatted}</b>
                        </p>
                        <p>{keywords}</p>
                        <p>bathroom_number {bathroom_number}</p>
                        <p>bedroom_number {bedroom_number}</p>
                    </div>
                    <div className="city__image">
                        <img src={img_url} alt="" />
                    </div>
                </div>
                <Like city={props.city} onLikeClick={likeClickHandler} />
            </div>
        </div>
    );
};

export default Modal;
