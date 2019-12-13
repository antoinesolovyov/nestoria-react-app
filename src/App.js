import React from "react";
import "./App.css";

import Header from "./components/HeaderComponent/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

class App extends React.Component {
    state = {
        cities: []
    };
    /*
    searchCityHandler = ({ place, id }) => {
        console.log(place, id);
        const nextCities = [{ place, id }, ...this.state.cities];

        this.setState({
            cities: nextCities
        });
    };
*/

    searchCityHandler = async ({ place, id }) => {
        const url = `https://api.nestoria.co.uk/api?page=${1}&encoding=json&action=search_listings&place_name=${place}`;

        const response = await fetch(url);
        const json = await response.json();

        const uuidv1 = require("uuid/v1");

        json.response.listings.map(city => (city.id = uuidv1()));

        const nextCities = [...json.response.listings, ...this.state.cities];

        this.setState({
            cities: nextCities
        });

        console.log(...json.response.listings);
    };

    render() {
        return (
            <>
                <Header onSearchCity={this.searchCityHandler} />
                <Article cities={this.state.cities} />
                <Footer />
            </>
        );
    }
}

export default App;
