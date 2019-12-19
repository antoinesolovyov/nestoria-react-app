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
} from "../actions/actions.jsx";

const App = ({
    place,
    setPlace,
    page,
    setPage,
    total,
    flats,
    favorites,
    getResult,
    likeClick,
    modalIsOpened,
    setModalIsOpened,
    favoritesIsClicked,
    setFavoritesIsClicked,
    modalFlat,
    setModalFlat
}) => {
    const searchCityHandler = useCallback(() => {
        getResult(place, page, false);
    }, [place, page, getResult]);

    const loadMoreHandler = useCallback(() => {
        getResult(place, page, true);
    }, [place, page, getResult]);

    const paginationHandler = useCallback(() => {
        getResult(place, page, false);
    }, [place, page, getResult]);

    const favoritesHandler = useCallback(
        clicked => {
            if (clicked) {
                setFavoritesIsClicked(true);
            } else {
                setFavoritesIsClicked(false);
            }
        },
        [setFavoritesIsClicked]
    );

    const flatHandler = useCallback(
        flat => {
            setModalIsOpened(true);
            setModalFlat(flat);
        },
        [setModalIsOpened, setModalFlat]
    );

    const modalHandler = useCallback(() => {
        setModalIsOpened(false);
        setModalFlat({});
    }, [setModalIsOpened, setModalFlat]);

    return (
        <>
            <Header
                place={place}
                setPlace={setPlace}
                favoritesIsClicked={favoritesIsClicked}
                onSearchCity={searchCityHandler}
                onFavoritesClick={favoritesHandler}
            />
            <Article
                page={page}
                setPage={setPage}
                total={total}
                flats={favoritesIsClicked ? favorites : flats}
                onLoadMoreClick={loadMoreHandler}
                onPaginationClick={paginationHandler}
                onLikeClick={likeClick}
                onFlatClick={flatHandler}
            />
            <Footer />
            {!!modalIsOpened && (
                <Modal
                    flat={modalFlat}
                    onModalClick={modalHandler}
                    onLikeClick={likeClick}
                />
            )}
        </>
    );
};

const mapStateToProps = ({ flats, favorites, modal }) => ({
    place: flats.place,
    flats: flats.flats,
    page: flats.page,
    total: flats.total,
    favorites: favorites.favorites,
    favoritesIsClicked: favorites.favoritesIsClicked,
    modalIsOpened: modal.modalIsOpened,
    modalFlat: modal.modalFlat
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
