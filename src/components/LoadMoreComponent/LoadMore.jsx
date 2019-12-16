import React, { useState } from "react";

import "./LoadMore.css";

const LoadMore = props => {
    const [page, setPage] = useState(0);

    const onClickHandler = () => {
        props.onLoadMoreClick(page + 1);
        setPage(page + 1);
    };

    return (
        <div>
            <button onClick={onClickHandler}>Load More</button>
        </div>
    );
};

export default LoadMore;
