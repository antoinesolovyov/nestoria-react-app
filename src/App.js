import React, { useState } from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/FooterComponent/Footer";
import Modal from "./components/ModalComponent/Modal";

const App = () => {
    const [place, setPlace] = useState("");
    const [flats, setFlats] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [favoritesIsClicked, setFavoritesIsClicked] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalFlat, setModalFlat] = useState({});

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

        setPlace(place);
        setFlats([...result.response.listings]);
        setPage(1);
        setTotal(result.response.total_pages);
    };

    const loadMoreHandler = async page => {
        const result = await request(place, page);

        setFlats([...flats, ...result.response.listings]);
        setPage(page);
    };

    const paginationHandler = async page => {
        const result = await request(place, page);

        setFlats([...result.response.listings]);
        setPage(page);
    };

    const favoritesHandler = clicked => {
        clicked ?
            setFavoritesIsClicked(true) :
            setFavoritesIsClicked(false);
    };

    const likeHandler = (liked, flat) => {
        liked ?
            setFavorites([...favorites, flat]) :
            setFavorites(favorites.filter(favoriteFlat => favoriteFlat.id !== flat.id));

        flat.isLiked = !flat.isLiked;
    };

    const flatHandler = flat => {
        setIsModalOpened(true);
        setModalFlat(flat);
    };

    const modalHandler = () => {
        setIsModalOpened(false);
        setModalFlat({});
    };

    return (
        <>
            <Header
                onSearchCity={searchCityHandler}
                onFavoritesClick={favoritesHandler}
            />
            <Article
                page={page}
                total={total}
                flats={favoritesIsClicked ? favorites : flats}
                onLoadMoreClick={loadMoreHandler}
                onPaginationClick={paginationHandler}
                onLikeClick={likeHandler}
                onFlatClick={flatHandler}
            />
            <Footer />

            {!!isModalOpened && (
                <Modal
                    flat={modalFlat}
                    onModalClick={modalHandler}
                    onLikeClick={likeHandler}
                />
            )}
        </>
    );
};

export default App;
