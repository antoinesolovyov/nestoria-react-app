import React, { useCallback } from "react";
import { connect } from "react-redux";

import "./App.css";
import Header from "../components/Header/Header";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import {
    setPlace,
    setPage,
    setTotal,
    setFlats,
    setFavorites,
    setFavoritesIsClicked,
    setModalIsOpened,
    setModalFlat,
    getResult,
    likeClick
} from "../actions/Actions.jsx";

const App = props => {
    const searchCityHandler = () => {
        props.getResult(props.place, props.page, false);
    };

    const loadMoreHandler = () => {
        props.getResult(props.place, props.page, true);
    };

    const paginationHandler = () => {
        props.getResult(props.place, props.page, false);
    };

    const favoritesHandler = useCallback(
        clicked => {
            if (clicked) {
                props.setFavoritesIsClicked(true);
            } else {
                props.setFavoritesIsClicked(false);
            }
        },
        [props]
    );

    const flatHandler = useCallback(
        flat => {
            props.setModalIsOpened(true);
            props.setModalFlat(flat);
        },
        [props]
    );

    const modalHandler = useCallback(() => {
        props.setModalIsOpened(false);
        props.setModalFlat({});
    }, [props]);

    return (
        <>
            <Header
                place={props.place}
                setPlace={props.setPlace}
                favoritesIsClicked={props.favoritesIsClicked}
                onSearchCity={searchCityHandler}
                onFavoritesClick={favoritesHandler}
            />
            <Article
                page={props.page}
                setPage={props.setPage}
                total={props.total}
                flats={props.favoritesIsClicked ? props.favorites : props.flats}
                onLoadMoreClick={loadMoreHandler}
                onPaginationClick={paginationHandler}
                onLikeClick={props.likeClick}
                onFlatClick={flatHandler}
            />
            <Footer />
            {!!props.modalIsOpened && (
                <Modal
                    flat={props.modalFlat}
                    onModalClick={modalHandler}
                    onLikeClick={props.likeClick}
                />
            )}
        </>
    );
};

const mapStateToProps = store => ({
    place: store.place,
    flats: store.flats,
    page: store.page,
    total: store.total,
    favorites: store.favorites,
    favoritesIsClicked: store.favoritesIsClicked,
    modalIsOpened: store.modalIsOpened,
    modalFlat: store.modalFlat
});

const mapDispatchToProps = {
    setPlace,
    setPage,
    setTotal,
    setFlats,
    setFavorites,
    setFavoritesIsClicked,
    setModalIsOpened,
    setModalFlat,
    getResult,
    likeClick
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
