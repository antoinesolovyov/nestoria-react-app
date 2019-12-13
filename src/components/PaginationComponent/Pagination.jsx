import React from "react";

import "./Pagination.css";

class Pagination extends React.Component {
    onClickHandler = event => {
        this.props.onPaginationClick(event.target.id);
    };

    pagination = (left, right) => {
        const list = [];

        for (let i = left; i <= right; i++) {
            list.push(
                <li
                key={i}
                id={i}
                className={this.props.page == i ? "red" : "white"}
                onClick={this.onClickHandler}>
                    {i}
                </li>
            );
        }

        return list;
    };

    render() {
        const page = this.props.page;
        const total = this.props.total;

        if (total < 5) {
            return <ul>{this.pagination(1, total)}</ul>;
        } else if (total >= 5 && page <= 3) {
            return <ul>{this.pagination(1, 5)}</ul>;
        } else if (page > 3 && page < total - 2) {
            return <ul>{this.pagination(+page - 2, +page + 2)}</ul>;
        } else if (page > total - 2) {
            return <ul>{this.pagination(total - 4, total)}</ul>;
        }
    }
}

export default Pagination;
