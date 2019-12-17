import React, { useState } from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/FooterComponent/Footer";
import Modal from "./components/ModalComponent/Modal";

const App = () => {
    const [state, setState] = useState({
        place: "",
        flats: [],
        page: 1,
        total: 1,
        favorites: [],
        favoritesIsClicked: false,
        isModalOpened: false,
        modalFlat: {}
    });

    const request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const result = await response.json();

        result.response.listings.map(flat => {
            flat.id = uuid.v1();
            flat.isLiked = false;

            return flat;
        });

        return result;
    };

    const searchCityHandler = async place => {
        const result = await request(place, 1);

        setState(state => ({
            ...state,
            place,
            flats: [...result.response.listings],
            page: 1,
            total: result.response.total_pages
        }));
    };

    const loadMoreHandler = async page => {
        const result = await request(state.place, page);

        setState(state => ({
            ...state,
            flats: [...state.flats, ...result.response.listings],
            page
        }));
    };

    const paginationHandler = async page => {
        const result = await request(state.place, page);

        setState(state => ({
            ...state,
            flats: [...result.response.listings],
            page
        }));
    };

    const favoritesHandler = clicked => {
        if (clicked) {
            setState(state => ({
                ...state,
                favoritesIsClicked: true
            }));
        } else {
            setState(state => ({
                ...state,
                favoritesIsClicked: false
            }));
        }
    };

    const likeHandler = (liked, flat) => {
        if (liked) {
            setState(state => ({
                ...state,
                favorites: [...state.favorites, flat]
            }));
        } else {
            setState(state => ({
                ...state,
                favorites: state.favorites.filter(favoriteFlat => favoriteFlat.id !== flat.id)
            }));
        }

        flat.isLiked = !flat.isLiked;
    };

    const flatHandler = flat => {
        setState(state => ({
            ...state,
            isModalOpened: true,
            modalFlat: flat
        }));
    };

    const modalHandler = () => {
        setState(state => ({
            ...state,
            isModalOpened: false,
            modalFlat: {}
        }));
    };

    return (
        <>
            <Header
                onSearchCity={searchCityHandler}
                onFavoritesClick={favoritesHandler}
            />
            <Article
                page={state.page}
                total={state.total}
                flats={state.favoritesIsClicked ? state.favorites : state.flats}
                onLoadMoreClick={loadMoreHandler}
                onPaginationClick={paginationHandler}
                onLikeClick={likeHandler}
                onFlatClick={flatHandler}
            />
            <Footer />

            {!!state.isModalOpened && (
                <Modal
                    flat={state.modalFlat}
                    onModalClick={modalHandler}
                    onLikeClick={likeHandler}
                />
            )}
        </>
    );
};

export default App;
