import React from "react";
import "./Article.css";

import List from "../ListComponent/List";
import LoadMore from "../LoadMoreComponent/LoadMore";

class Article extends React.Component {
    render() {
        return (
            <article>
                <h3>Найденные города</h3>
                <List cities={this.props.cities} />
                <LoadMore onLoadMoreClick={this.props.onLoadMoreClick} />
            </article>
        );
    }
}

export default Article;
