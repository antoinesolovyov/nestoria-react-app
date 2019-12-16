import React from "react";

import "./Article.css";
import List from "../ListComponent/List";
import LoadMore from "../LoadMoreComponent/LoadMore";
import Pagination from "../PaginationComponent/Pagination";

const Article = props => (
    <article>
        <h3>Найденные города</h3>
        <List
            cities={props.cities}
            onCityClick={props.onCityClick}
            onLikeClick={props.onLikeClick}
        />

        {!!props.cities.length && (
            <LoadMore onLoadMoreClick={props.onLoadMoreClick} />
        )}

        {!!props.cities.length && (
            <Pagination
                page={props.page}
                total={props.total}
                onPaginationClick={props.onPaginationClick}
            />
        )}
    </article>
);

export default Article;
