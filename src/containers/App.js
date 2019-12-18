import React, { useCallback } from "react";
import { connect } from "react-redux";

import "./App.css";
import Header from "../components/HeaderComponent/Header";
import Article from "../components/ArticleComponent/Article";
import Footer from "../components/FooterComponent/Footer";
import Modal from "../components/ModalComponent/Modal";
import {
    setPlace,
    setPage,
    setTotal,
    setFlats,
    setFavorites,
    setFavoritesIsClicked,
    setModalIsOpened,
    setModalFlat,
    getResult
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

    const likeHandler = useCallback(
        (liked, flat) => {
            if (liked) {
                props.setFavorites([...props.favorites, flat]);
            } else {
                props.setFavorites(
                    props.favorites.filter(
                        favoriteFlat => favoriteFlat.id !== flat.id
                    )
                );
            }

            flat.isLiked = !flat.isLiked;
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
                onLikeClick={likeHandler}
                onFlatClick={flatHandler}
            />
            <Footer />
            {!!props.modalIsOpened && (
                <Modal
                    flat={props.modalFlat}
                    onModalClick={modalHandler}
                    onLikeClick={likeHandler}
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

const mapDispatchToProps = dispatch => ({
    setPlace: place => dispatch(setPlace(place)),
    setPage: page => dispatch(setPage(page)),
    setTotal: total => dispatch(setTotal(total)),
    setFlats: (prevFlats, nextFlats) =>
        dispatch(setFlats(prevFlats, nextFlats)),
    setFavorites: favorites => dispatch(setFavorites(favorites)),
    setFavoritesIsClicked: favoritesIsClicked =>
        dispatch(setFavoritesIsClicked(favoritesIsClicked)),
    setModalIsOpened: modalIsOpened =>
        dispatch(setModalIsOpened(modalIsOpened)),
    setModalFlat: modalFlat => dispatch(setModalFlat(modalFlat)),
    getResult: (place, page, isLoadMore) => dispatch(getResult(place, page, isLoadMore))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
