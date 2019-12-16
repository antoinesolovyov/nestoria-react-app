import React from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/FooterComponent/Footer";
import Modal from "./components/ModalComponent/Modal";

class App extends React.Component {
    state = {
        place: "",
        cities: [],
        page: 1,
        total: 1,
        favorites: [],
        favoritesIsClicked: false,
        isModal: false,
        modalCity: {}
    };

    request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    };

    modifyResult(result) {
        result.response.listings.map(city => {
            city.id = uuid.v1();
            city.isLiked = false;

            return city;
        });
    }

    searchCityHandler = async place => {
        const result = await this.request(place, 1);

        this.modifyResult(result);

        this.setState({
            cities: [...result.response.listings],
            place,
            page: 1,
            total: result.response.total_pages
        });
    };

    loadMoreHandler = async page => {
        const result = await this.request(this.state.place, page);

        this.modifyResult(result);

        this.setState({
            cities: [...this.state.cities, ...result.response.listings],
            page
        });
    };

    paginationHandler = async page => {
        const result = await this.request(this.state.place, page);

        this.modifyResult(result);

        this.setState({
            cities: [...result.response.listings],
            page
        });
    };

    favoritesHandler = clicked => {
        if (clicked) {
            this.setState({
                favoritesIsClicked: true
            });
        } else {
            this.setState({
                favoritesIsClicked: false
            });
        }
    };

    likeHandler = (liked, city) => {
        if (liked) {
            this.setState({
                favorites: [...this.state.favorites, city]
            });
        } else {
            this.setState({
                favorites: this.state.favorites.filter(
                    favCity => favCity.id !== city.id
                )
            });
        }

        city.isLiked = !city.isLiked;
    };

    cityHandler = city => {
        this.setState({
            isModal: true,
            modalCity: city
        });
    };

    modalHandler = () => {
        this.setState({
            isModal: false,
            modalCity: {}
        });
    };

    render() {
        return (
            <>
                <Header
                    onSearchCity={this.searchCityHandler}
                    onFavoritesClick={this.favoritesHandler}
                />
                <Article
                    page={this.state.page}
                    total={this.state.total}
                    cities={
                        this.state.favoritesIsClicked
                            ? this.state.favorites
                            : this.state.cities
                    }
                    onLoadMoreClick={this.loadMoreHandler}
                    onPaginationClick={this.paginationHandler}
                    onLikeClick={this.likeHandler}
                    onCityClick={this.cityHandler}
                />
                <Footer />

                {this.state.isModal ? (
                    <Modal
                        city={this.state.modalCity}
                        onModalClick={this.modalHandler}
                        onLikeClick={this.likeHandler}
                    />
                ) : (
                    ""
                )}
            </>
        );
    }
}

export default App;
