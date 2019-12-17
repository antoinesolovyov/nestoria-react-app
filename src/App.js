import React, { useState } from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/FooterComponent/Footer";
import Modal from "./components/ModalComponent/Modal";

const App = () => {
    const [place, setPlace] = useState("");
    const [cities, setCities] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [favoritesIsClicked, setFavoritesIsClicked] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalCity, setModalCity] = useState({});

    const request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const result = await response.json();

        result.response.listings.map(city => {
            city.id = uuid.v1();
            city.isLiked = false;

            return city;
        });

        return result;
    };

    const searchCityHandler = async place => {
        const result = await request(place, 1);

        setPlace(place);
        setCities([...result.response.listings]);
        setPage(1);
        setTotal(result.response.total_pages);
    };

    const loadMoreHandler = async page => {
        const result = await request(place, page);

        setCities([...cities, ...result.response.listings]);
        setPage(page);
    };

    const paginationHandler = async page => {
        const result = await request(place, page);

        setCities([...result.response.listings]);
        setPage(page);
    };

    const favoritesHandler = clicked => {
        clicked ?
            setFavoritesIsClicked(true) :
            setFavoritesIsClicked(false);
    };

    const likeHandler = (liked, city) => {
        liked ?
            setFavorites([...favorites, city]) :
            setFavorites(favorites.filter(favCity => favCity.id !== city.id));

        city.isLiked = !city.isLiked;
    };

    const cityHandler = city => {
        setIsModalOpened(true);
        setModalCity(city);
    };

    const modalHandler = () => {
        setIsModalOpened(false);
        setModalCity({});
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
                cities={favoritesIsClicked ? favorites : cities}
                onLoadMoreClick={loadMoreHandler}
                onPaginationClick={paginationHandler}
                onLikeClick={likeHandler}
                onCityClick={cityHandler}
            />
            <Footer />

            {!!isModalOpened && (
                <Modal
                    city={modalCity}
                    onModalClick={modalHandler}
                    onLikeClick={likeHandler}
                />
            )}
        </>
    );
};

export default App;
