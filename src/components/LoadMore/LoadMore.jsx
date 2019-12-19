import React, { useCallback } from "react";

import "./LoadMore.css";

const LoadMore = ({ page, setPage, onLoadMoreClick }) => {
    const onClickHandler = useCallback(() => {
        setPage(page + 1);
        onLoadMoreClick();
    }, [page, setPage, onLoadMoreClick]);

    return (
        <div>
            <button onClick={onClickHandler}>Load More</button>
        </div>
    );
};

export default LoadMore;
