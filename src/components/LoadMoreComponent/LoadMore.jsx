import React from "react";

import "./LoadMore.css";

const LoadMore = props => {
    return (
        <div>
            <button
                onClick={() => {
                    props.setPage(props.page + 1);
                    props.onLoadMoreClick();
                }}
            >
                Load More
            </button>
        </div>
    );
};

export default LoadMore;
