import React from "react";

import "./Pagination.css";

class Pagination extends React.Component {
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
            <ul>
                
            </ul>
        );
    }
}

export default Pagination;
