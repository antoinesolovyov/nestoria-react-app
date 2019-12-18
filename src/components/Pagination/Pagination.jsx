import React, { useCallback } from "react";

import "./Pagination.css";

const Pagination = ({ page, setPage, total, onPaginationClick }) => {
    const onClickHandler = useCallback(
        event => {
            setPage(+event.target.id);
            onPaginationClick();
        },
        [setPage, onPaginationClick]
    );

    const getPages = useCallback(
        (left, right) => {
            const list = [];

            for (let i = left; i <= right; i++) {
                list.push(
                    <li
                        key={i}
                        id={i}
                        className={+page === i ? "red" : "white"}
                        onClick={onClickHandler}
                    >
                        {i}
                    </li>
                );
            }

            return list;
        },
        [page, onClickHandler]
    );

    if (total < 5) {
        return <ul>{getPages(1, total)}</ul>;
    } else if (total >= 5 && page <= 3) {
        return <ul>{getPages(1, 5)}</ul>;
    } else if (page > 3 && page < total - 2) {
        return <ul>{getPages(+page - 2, +page + 2)}</ul>;
    } else if (page > total - 2) {
        return <ul>{getPages(total - 4, total)}</ul>;
    }
};

export default Pagination;
