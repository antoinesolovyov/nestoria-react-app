import React from "react";
import uuid from "uuid";

import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Article from "./components/Article/Article";
import Footer from "./components/FooterComponent/Footer";

class App extends React.Component {
    state = {
        place: "",
        cities: [],
        page: 1
    };

    request = async (place, page) => {
        const url = `https://api.nestoria.co.uk/api?page=${page}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const json = await response.json();

        return json;
    };

    searchCityHandler = async ({ place }) => {
        const json = await this.request(place, 1);

        json.response.listings.map(city => (city.id = uuid.v1()));

        this.setState({
            cities: [...json.response.listings],
            place,
            page: 1
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

    render() {
        return (
            <>
                <Header onSearchCity={this.searchCityHandler} />
                <Article
                    cities={this.state.cities}
                    onLoadMoreClick={this.loadMoreHandler}
                />
                <Footer />
            </>
        );
    }
}

export default App;
