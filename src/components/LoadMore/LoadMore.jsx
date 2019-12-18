import React, { useCallback } from "react";

import "./LoadMore.css";

const LoadMore = props => {
    const onClickHandler = useCallback(() => {
        props.setPage(props.page + 1);
        props.onLoadMoreClick();
    }, [props]);

    return (
        <div>
            <button onClick={onClickHandler}>Load More</button>
        </div>
    );
};

export default LoadMore;
