import React from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/FooterComponent/Footer";

class App extends React.Component {
    state = {
        place: "",
        cities: [],
        page: 1,
        total: 1,
        favorites: [],
        favoritesIsClicked: false
    };

    request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
    };

    searchCityHandler = async place => {
        const result = await this.request(place, 1);

        result.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...result.response.listings],
            place,
            page: 1,
            total: result.response.total_pages
        });
    };

    loadMoreHandler = async page => {
        const result = await this.request(this.state.place, page);

        result.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...this.state.cities, ...result.response.listings],
            page
        });
    };

    paginationHandler = async page => {
        const result = await this.request(this.state.place, page);

        result.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...result.response.listings],
            page
        });
    };

    favoritesHandler = (clicked) => {
        if (clicked) {
            this.setState({
                favoritesIsClicked: true
            });
        } else {
            this.setState({
                favoritesIsClicked: false
            });
        }

        console.log(clicked);
    };

    likeHandler = (liked, city) => {
        if (liked) {
            this.setState({
                favorites: [...this.state.favorites, city]
            });
        } else {
            this.setState({
                favorites: this.state.favorites.filter((favCity) => favCity.id !== city.id)
            });
        }

        console.log(liked, city);
    }

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
                />
                <Footer />
            </>
        );
    }
}

export default App;
