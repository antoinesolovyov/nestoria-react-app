import React from "react";
import "./Article.css";

import List from "../ListComponent/List";
import LoadMore from "../LoadMoreComponent/LoadMore";
import Pagination from "../PaginationComponent/Pagination";

const Article = props => (
    <article>
        <h3>Найденные города</h3>
        <List cities={props.cities} />
        <LoadMore onLoadMoreClick={props.onLoadMoreClick} />
        <Pagination />
    </article>
);

export default Article;
