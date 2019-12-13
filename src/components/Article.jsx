import React from "react";

import List from "./ListComponent/List";

class Article extends React.Component {


    render() {
        return (
            <article>
                <h3>Найденные города</h3>
                <List cities={this.props.cities}/>
            </article>
        );
    }
}

export default Article;
