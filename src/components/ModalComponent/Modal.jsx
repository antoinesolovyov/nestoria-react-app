import React from "react";

import "./Modal.css";
import Like from "../LikeComponent/Like";

const Modal = props => {
    const {
        img_url,
        title,
        summary,
        price_formatted,
        keywords,
        bathroom_number,
        bedroom_number
    } = props.flat;

    return (
        <div className="modal">
            <div className="modal__flat">
                <div onClick={props.onModalClick}>
                    <div className="modal__description">
                        <p>{title}</p>
                        <p>{summary}</p>
                        <p>{price_formatted}</p>
                        <p>{keywords}</p>
                        <p>Bathroom number: {bathroom_number}</p>
                        <p>Bedroom number: {bedroom_number}</p>
                    </div>
                    <div className="flat__image">
                        <img src={img_url} alt={title} />
                    </div>
                </div>
                <Like flat={props.flat} onLikeClick={props.onLikeClick} />
            </div>
        </div>
    );
};

export default Modal;
