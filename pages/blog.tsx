import React, { FunctionComponent } from "react";

import Header from "../components/Header";
import styles from "../styles/blog.module.css";

const Blog = (): JSX.Element => {
    return (
        <article>
            <Header />
            <main className={styles.blogHomePage}>
                <h1>Our Awesome Blog is opening soon...</h1>
            </main>
        </article>
    )   
}

export default Blog;