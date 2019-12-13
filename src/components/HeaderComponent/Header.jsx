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
                    <input
                        type="text"
                        value={this.state.place}
                        onChange={this.onChangeHandler}
                    />
                    <button>Serach</button>
                </form>
            </header>
        );
    }
}

export default Header;
