import React from "react";

import "./Article.css";
import List from "../ListComponent/List";
import LoadMore from "../LoadMoreComponent/LoadMore";
import Pagination from "../PaginationComponent/Pagination";

const Article = props => (
    <article>
        <h3>Найденные квартиры</h3>
        <List
            flats={props.flats}
            onFlatClick={props.onFlatClick}
            onLikeClick={props.onLikeClick}
        />

        {!!props.flats.length && (
            <LoadMore
                page={props.page}
                setPage={props.setPage}
                onLoadMoreClick={props.onLoadMoreClick}
            />
        )}

        {!!props.flats.length && (
            <Pagination
                page={props.page}
                setPage={props.setPage}
                total={props.total}
                onPaginationClick={props.onPaginationClick}
            />
        )}
    </article>
);

export default Article;
