import React from "react";
import "./Header.css";

class Header extends React.Component {
    state = {
        place: ""
    };

    onSubmitHandler = event => {
        const { place } = this.state;

        this.props.onSearchCity({
            place
        });

        event.preventDefault();
    };

    onChangeHandler = event => {
        this.setState({ place: event.target.value });
    };

    render() {
        return (
            <header>
                <form onSubmit={this.onSubmitHandler}>
                    <button className="button__search">Search</button>
                    <input
                        className="input__search"
                        type="text"
                        value={this.state.place}
                        onChange={this.onChangeHandler}
                        placeholder="London"
                    />
                    <button className="button__like">♥</button>
                </form>
            </header>
        );
    }
}

export default Header;
