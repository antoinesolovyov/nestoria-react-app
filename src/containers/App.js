import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";

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
    setModalFlat
} from "../actions/Actions.jsx";

const App = props => {
    const request = async () => {
        const url = `https://api.nestoria.co.uk/api?page=${props.page}&encoding=json&action=search_listings&place_name=${props.place}`;

        const response = await fetch(url);
        const result = await response.json();

        result.response.listings.map(flat => {
            flat.id = uuid.v1();
            flat.isLiked = false;

            return flat;
        });

        return result;
    };

    const searchCityHandler = async () => {
        const result = await request(props.place, 1);

        props.setTotal(result.response.total_pages);
        props.setFlats([...result.response.listings]);
    };

    const loadMoreHandler = async () => {
        const result = await request();

        props.setFlats([...props.flats, ...result.response.listings]);
    };

    const paginationHandler = async () => {
        const result = await request();

        props.setFlats([...result.response.listings]);
    };

    const favoritesHandler = clicked => {
        if (clicked) {
            props.setFavoritesIsClicked(true);
        } else {
            props.setFavoritesIsClicked(false);
        }
    };

    const likeHandler = (liked, flat) => {
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
    };

    const flatHandler = flat => {
        props.setModalIsOpened(true);
        props.setModalFlat(flat);
    };

    const modalHandler = () => {
        props.setModalIsOpened(false);
        props.setModalFlat({});
    };

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
            <Footer />ß
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
    setFlats: flats => dispatch(setFlats(flats)),
    setFavorites: favorites => dispatch(setFavorites(favorites)),
    setFavoritesIsClicked: favoritesIsClicked =>
        dispatch(setFavoritesIsClicked(favoritesIsClicked)),
    setModalIsOpened: modalIsOpened =>
        dispatch(setModalIsOpened(modalIsOpened)),
    setModalFlat: modalFlat => dispatch(setModalFlat(modalFlat))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
