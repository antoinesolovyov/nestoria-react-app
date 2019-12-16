import React from "react";

import "./Modal.css";
import Like from "../LikeComponent/Like";

class Modal extends React.Component {
    modalClickHandler = () => {
        this.props.onModalClick();
    };

    likeClickHandler = isLikeClicked => {
        this.props.onLikeClick(isLikeClicked, this.props.city);
    };

    render() {
        const {
            img_url,
            title,
            summary,
            price_formatted,
            keywords
        } = this.props.city;

        return (
            <div className="modal">
                <div className="modal__city">
                    <div onClick={this.modalClickHandler}>
                        <div className="modal__description">
                            <p>
                                <b>{title}</b>
                            </p>
                            <p>{summary}</p>
                            <p>
                                <b>{price_formatted}</b>
                            </p>
                            <p>{keywords}</p>
                        </div>
                        <div className="city__image">
                            <img src={img_url} alt="" />
                        </div>
                    </div>
                    <Like
                        city={this.props.city}
                        onLikeClick={this.likeClickHandler}
                    />
                </div>
            </div>
        );
    }
}

export default Modal;
