import React from "react";
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
        this.setState({
            cities: [],
            page: 1
        });

        const json = await this.request(place, this.state.page);
        const uuidv1 = require("uuid/v1");

        json.response.listings.map(city => (city.id = uuidv1()));

        const nextCities = [...this.state.cities, ...json.response.listings];

        this.setState({
            cities: nextCities,
            place
        });
    };

    loadMoreHandler = async page => {
        this.setState({ page });

        const json = await this.request(this.state.place, page);
        const uuidv1 = require("uuid/v1");

        json.response.listings.map(city => (city.id = uuidv1()));

        const nextCities = [...this.state.cities, ...json.response.listings];

        this.setState({
            cities: nextCities
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
