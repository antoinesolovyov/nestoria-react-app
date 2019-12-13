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
        total: 1
    };

    request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const json = await response.json();

        return json;
    };

    searchCityHandler = async place => {
        const json = await this.request(place, 1);

        json.response.listings.map(city => (city.id = uuid.v1()));

        console.log(json.response.total_pages);

        this.setState({
            cities: [...json.response.listings],
            place,
            page: 1,
            total: json.response.total_pages
        });
    };

    loadMoreHandler = async page => {
        const json = await this.request(this.state.place, page);

        json.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...this.state.cities, ...json.response.listings],
            page
        });
    };

    paginationHandler = async page => {
        const json = await this.request(this.state.place, page);

        json.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...json.response.listings],
            page
        });
    };

    render() {
        return (
            <>
                <Header onSearchCity={this.searchCityHandler} />
                <Article
                    page={this.state.page}
                    total={this.state.total}
                    cities={this.state.cities}
                    onLoadMoreClick={this.loadMoreHandler}
                    onPaginationClick={this.paginationHandler}
                />
                <Footer />
            </>
        );
    }
}

export default App;
