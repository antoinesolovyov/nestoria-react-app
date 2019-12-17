import React, { useState, useCallback } from "react";

import "./LoadMore.css";

const LoadMore = props => {
    const [page, setPage] = useState(0);

    const onClickHandler = useCallback(() => {
        props.onLoadMoreClick(page + 1);
        setPage(page + 1);
    }, [props, page, setPage]);

    return (
        <div>
            <button onClick={onClickHandler}>Load More</button>
        </div>
    );
};

export default LoadMore;
