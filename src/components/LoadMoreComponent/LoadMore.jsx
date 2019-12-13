import React from "react";
import "./LoadMore.css";

class LoadMore extends React.Component {
    state = {
        page: 1
    };

    onClickHandler = () => {
        const page = this.state.page + 1;

        this.props.onLoadMoreClick(page);
        this.setState({ page });
    };

    render() {
        return (
            <div>
                <button
                onClick={this.onClickHandler}>Load More</button>
            </div>
        );
    }
}

export default LoadMore;
